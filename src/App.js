import React, { useEffect } from "react";
import "./App.css";
import Skills from "./Skills";
import Footer from "./Footer";
import Projects from "./Projects";
import Conway from "./Conway";
import Navigation from "./Navigation";
import Header from "./Header";
import AboutMe from "./AboutMe";

import profilePic from "./images/ProfilePicture.png";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import Experience from "./Experience";
import ReactLogo from "./Logos/Tech-Logos/ReactLogo.png";
import Resume from "./images/ResumeJordan.pdf";
import arrowDown from "./images/arrow-204-128.png";
import Request from "./request";
import projectArray from "./projectArray";

function App() {
  /* When the page loads scroll to the top */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app">
      <a id="home"></a>
      <Header />

      {/* About Me */}
      <a id="aboutme"></a>
      <section className="app__aboutme">
        <div className="app__title">About Me</div>
      </section>
      <AboutMe />

      {/* Projects */}
      <a id="projects"></a>
      <section className="app__experience">
        <div className="app__title">Projects/Work</div>
      </section>

      <div className="project__container">
        {projectArray.map((project) => (
          <Projects
            projectTitle={project.projectTitle}
            description={project.description}
            techArray={project.techArray}
          />
        ))}
      </div>

      {/* Experience */}
      <a id="education"></a>
      <section className="app__experience">
        <div className="app__title">Experience and Education</div>
      </section>
      <Experience />

      {/* Relevant Technologies */}

      {/* Etc.. */}
      <a href="#home" className="toTop">
        <ArrowDropUpIcon
          style={{ color: "#0dd6a8", fontSize: "60px" }}
        ></ArrowDropUpIcon>
        Back to Top
      </a>
      {/* Footer */}
      <a id="contact"></a>
      <Footer />
    </div>
  );
}

export default App;
