import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="app__proficiency">
      <div className="app__proficiencyBar">
        <div className="app__proficiencyBarFill" style={{ width: `80%` }}>
          <div className="app__proficiencyBarTag">C++</div>
        </div>
        <span className="app__span">80%</span>
      </div>
      <div className="app__proficiencyBar">
        <div className="app__proficiencyBarFill" style={{ width: `80%` }}>
          <div className="app__proficiencyBarTag">C</div>
        </div>
        <span className="app__span">80%</span>
      </div>
      <div className="app__proficiencyBar">
        <div className="app__proficiencyBarFill" style={{ width: `60%` }}>
          <div className="app__proficiencyBarTag">Python</div>
        </div>
        <span className="app__span">60%</span>
      </div>
      <div className="app__proficiencyBar">
        <div className="app__proficiencyBarFill" style={{ width: `50%` }}>
          <div className="app__proficiencyBarTag">Java</div>
        </div>
        <span className="app__span">50%</span>
      </div>
      <div className="app__proficiencyBar">
        <div className="app__proficiencyBarFill" style={{ width: `60%` }}>
          <div className="app__proficiencyBarTag">HTML</div>
        </div>
        <span className="app__span">60%</span>
      </div>
      <div className="app__proficiencyBar">
        <div className="app__proficiencyBarFill" style={{ width: `50%` }}>
          <div className="app__proficiencyBarTag">CSS</div>
        </div>
        <span className="app__span">50%</span>
      </div>
      <div className="app__proficiencyBar">
        <div className="app__proficiencyBarFill" style={{ width: `40%` }}>
          <div className="app__proficiencyBarTag">Javascript</div>
        </div>
        <span className="app__span">40%</span>
      </div>
      <div className="app__proficiencyBar">
        <div className="app__proficiencyBarFill" style={{ width: `50%` }}>
          <div className="app__proficiencyBarTag">React-JS</div>
        </div>
        <span className="app__span">50%</span>
      </div>
      <div className="app__proficiencyBar">
        <div className="app__proficiencyBarFill" style={{ width: `65%` }}>
          <div className="app__proficiencyBarTag">Illustrator</div>
        </div>
        <span className="app__span">65%</span>
      </div>
    </div>
  );
}

export default Skills;
