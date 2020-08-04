import React, { useEffect } from "react";
import "./App.css";
import Skills from "./Skills";
import profilePic from "./images/ProfilePicture.png";

function App() {
  /* When the page loads scroll to the top */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app">
      {/* Header -> Intro + icon + name */}
      <section className="app__header">
        <div className="app__canvas">
          <div className="app__canvasBackground">
            <div className="app__canvasContainer">
              <div className="app__canvasContainerText">
                Hello World! My name is{" "}
                <span className="highlight">Jordan Ng</span>.
                <br />
                Aspiring Software Developer.
              </div>
              <img
                className="app__canvasTriangle"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/White_triangle_inverted.svg/1200px-White_triangle_inverted.svg.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="app__aboutme">
        {/* Projects title */}
        <div className="app__title">About Me</div>
      </section>

      <img className="aboutme__image" src={profilePic} alt="Jordan Ng" />
      <div className="aboutme__container">
        <div className="aboutme__description">
          I have a bachelors in Computer Science and I am currently located in
          Honolulu Hawaii. I recently graduated from Oregon State University and
          have been seeking employment as a software engineer/developer. I have
          a passion for clean looking UI, and I am always looking for new ways
          to improve upon my skills.
        </div>
      </div>

      {/* Language comfort bars */}
      <Skills />

      {/* Projects */}
      <section className="app__projects">
        {/* Projects title */}
        <div className="app__title">Projects</div>
      </section>

      {/* Resume */}
      <section className="app__resume">
        {/* Projects title */}
        <div className="app__title">Resume</div>
      </section>

      {/* Experience */}

      {/* Relevant Technologies */}

      {/* Etc.. */}

      {/* Footer */}
    </div>
  );
}

export default App;
