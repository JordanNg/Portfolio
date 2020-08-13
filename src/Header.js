import React from "react";
import "./Header.css";
import Conway from "./Conway";
import Navigation from "./Navigation";

function Header() {
  return (
    <div className="app__header">
      <div className="app__canvas">
        <div className="app__canvasBackground">
          <div className="app__canvasContainer">
            <div className="app__canvasContainerText">
              Hello World! My name is{" "}
              <span className="highlight">Jordan Ng</span>.
              <br />
              An aspiring Software Developer.
            </div>
          </div>
          <Conway className="app__conway" />
        </div>
      </div>
      <div className="app__navigationCont">
        <Navigation />
      </div>
    </div>
  );
}

export default Header;
