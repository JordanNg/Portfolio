import React, { useEffect, useState } from "react";
import "./Skills.css";

function Skills() {
  const [show, handleShow] = useState(false);

  /* Scroll listener so we can add fade in transition */
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        handleShow(true);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className="app__proficiency">
      <div className="app__proficiencyBar">
        <div className={`app__proficiencyBarFill ${show && "bar-80"}`}>
          <div className="app__proficiencyBarTag">C++</div>
        </div>
        <div className={`app__span ${show && "app__spanAfter"}`}>80%</div>
      </div>
      <div className="app__proficiencyBar">
        <div className={`app__proficiencyBarFill ${show && "bar-80"}`}>
          <div className="app__proficiencyBarTag">C</div>
        </div>
        <span className={`app__span ${show && "app__spanAfter"}`}>80%</span>
      </div>
      <div className="app__proficiencyBar">
        <div className={`app__proficiencyBarFill ${show && "bar-60"}`}>
          <div className="app__proficiencyBarTag">Python</div>
        </div>
        <span className={`app__span ${show && "app__spanAfter"}`}>60%</span>
      </div>
      <div className="app__proficiencyBar">
        <div className={`app__proficiencyBarFill ${show && "bar-50"}`}>
          <div className="app__proficiencyBarTag">Java</div>
        </div>
        <span className={`app__span ${show && "app__spanAfter"}`}>50%</span>
      </div>
      <div className="app__proficiencyBar">
        <div className={`app__proficiencyBarFill ${show && "bar-60"}`}>
          <div className="app__proficiencyBarTag">HTML</div>
        </div>
        <span className={`app__span ${show && "app__spanAfter"}`}>60%</span>
      </div>
      <div className="app__proficiencyBar">
        <div className={`app__proficiencyBarFill ${show && "bar-60"}`}>
          <div className="app__proficiencyBarTag">CSS</div>
        </div>
        <span className={`app__span ${show && "app__spanAfter"}`}>60%</span>
      </div>
      <div className="app__proficiencyBar">
        <div className={`app__proficiencyBarFill ${show && "bar-50"}`}>
          <div className="app__proficiencyBarTag">Javascript</div>
        </div>
        <span className={`app__span ${show && "app__spanAfter"}`}>50%</span>
      </div>
      <div className="app__proficiencyBar">
        <div className={`app__proficiencyBarFill ${show && "bar-50"}`}>
          <div className="app__proficiencyBarTag">React</div>
        </div>
        <span className={`app__span ${show && "app__spanAfter"}`}>50%</span>
      </div>
      <div className="app__proficiencyBar">
        <div className={`app__proficiencyBarFill ${show && "bar-65"}`}>
          <div className="app__proficiencyBarTag">Illustrator</div>
        </div>
        <span className={`app__span ${show && "app__spanAfter"}`}>65%</span>
      </div>
    </div>
  );
}

export default Skills;
