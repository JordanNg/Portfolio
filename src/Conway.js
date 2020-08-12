import React, { useState, useEffect, useCallback } from "react";
import produce from "immer";

function Game() {
  const numRows = 20;
  const numCols = 80;

  const operations = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0],
  ];

  // Setup the grid
  const [grid, setGrid] = useState(() => {
    const rows = [];
    // For each row push an array
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }
    return rows;
  });

  //console.log(grid);
  useEffect(() => {
    setGrid(
      grid.map((rows, i) =>
        rows.map((col, j) => (grid[i][j] = Math.floor(Math.random() * 2)))
      )
    );
  }, []);

  const runSimulation = useCallback(() => {
    // Simulate
    setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < numRows; i++) {
          for (let j = 0; j < numCols; j++) {
            let neighbors = 0;

            // For each of the operations
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newJ = j + y;
              // Bounds checking
              if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
                neighbors += g[newI][newJ];
              }
            });

            // Game rules
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][j] = 0;
            } else if (g[i][j] === 0 && neighbors === 3) {
              gridCopy[i][j] = 1;
            }
          }
        }
      });
    });
    setTimeout(runSimulation, 100);
  }, []);

  // Start simulation
  useEffect(() => {
    runSimulation();
  }, []);

  return (
    <div>
      <div
        style={{
          display: `grid`,
          gridTemplateColumns: `repeat(${numCols}, 10px)`,
          marginTop: "40px",
        }}
      >
        {grid.map((rows, i) =>
          rows.map((col, j) => (
            <div
              key={`${i}-${j}`}
              style={{
                width: 10,
                height: 10,
                backgroundColor: grid[i][j] ? "white" : undefined,
                border: "solid 1px #252a35",
              }}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Game;
