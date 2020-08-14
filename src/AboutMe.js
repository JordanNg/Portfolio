import React from "react";
import Skills from "./Skills";
import "./AboutMe.css";

import arrowDown from "./images/arrow-204-128.png";
import Resume from "./images/ResumeJordan.pdf";
import profilePic from "./images/ProfilePicture.png";

function AboutMe() {
  return (
    <div className="about__skills__container">
      <div className="aboutme__container">
        <img className="aboutme__image" src={profilePic} alt="Jordan Ng" />
        <div className="aboutme__description">
          Hello World! My name is Jordan Ng and I recently graduated from Oregon
          State University with a bachelors in Computer Science. I am currently
          located in Honolulu Hawaii and have been seeking employment as a
          software engineer/developer. I have a passion for clean UI, and I am
          always looking for new ways to improve upon my skills.
        </div>
        <a href={Resume}>
          <button className="aboutme__button">
            <img className="download__image" src={arrowDown}></img>
            Download Resume
          </button>
        </a>
      </div>

      {/* Language comfort bars */}
      <Skills />
    </div>
  );
}

export default AboutMe;
