import React, { useEffect } from "react";
import "./App.css";
import Skills from "./Skills";
import Footer from "./Footer";
import Projects from "./Projects";

import profilePic from "./images/ProfilePicture.png";
import Experience from "./Experience";
import ReactLogo from "./Logos/Tech-Logos/ReactLogo.png";
import Resume from "./images/ResumeJordan.pdf";
import arrowDown from "./images/arrow-204-128.png";

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
                alt="triangle"
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

      <div className="about__skills__container">
        <div className="aboutme__container">
          <img className="aboutme__image" src={profilePic} alt="Jordan Ng" />
          <div className="aboutme__description">
            I have a bachelors in Computer Science and I am currently located in
            Honolulu Hawaii. I recently graduated from Oregon State University
            and have been seeking employment as a software engineer/developer. I
            have a passion for clean looking UI, and I am always looking for new
            ways to improve upon my skills.
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
      {/* Projects */}
      <section className="app__experience">
        <div className="app__title">Projects/Work</div>
      </section>

      <div className="project__container">
        <Projects
          projectTitle="Food Crate"
          description="An Android mobile application that allows indecisive foodies to quickly decide on their next meal."
          techArray={[
            "https://2.bp.blogspot.com/-tzm1twY_ENM/XlCRuI0ZkRI/AAAAAAAAOso/BmNOUANXWxwc5vwslNw3WpjrDlgs9PuwQCLcBGAsYHQ/s1600/pasted%2Bimage%2B0.png",
            "https://www.mazewomenshealth.com/wp-content/uploads/2019/07/Yelp_trademark_RGB2.png",
          ]}
        />
        <Projects
          projectTitle="Othello AI"
          description="AI that uses the MINIMAX algorithm in a simplified game of Othello. AI attempts to play optimally against a human player."
          techArray={[
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
          ]}
        />
        <Projects
          projectTitle="Netflix Clone"
          description="A clone of Netflix's web application. Implemented using React and hosted with Firebase. Movies are pulled via The Movie Database's API."
          source={ReactLogo}
          techArray={[
            "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
            "https://4.bp.blogspot.com/-rtNRVM3aIvI/XJX_U07Z-II/AAAAAAAAJXY/YpdOo490FTgdKOxM4qDG-2-EzcNFAWkKACK4BGAYYCw/s1600/logo%2Bfirebase%2Bicon.png",
          ]}
        />
        <Projects
          projectTitle="Instagram Clone"
          description="A React implementation of a simplified Instagram web application. This clone uses Firebase as a backend for storing pictures and comments."
          techArray={[
            "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
            "https://4.bp.blogspot.com/-rtNRVM3aIvI/XJX_U07Z-II/AAAAAAAAJXY/YpdOo490FTgdKOxM4qDG-2-EzcNFAWkKACK4BGAYYCw/s1600/logo%2Bfirebase%2Bicon.png",
            "https://material-ui.com/static/logo.png",
          ]}
        />
        <Projects
          projectTitle="Yelp Review Sentiment"
          description="AI that uses a training set to determine the sentiment of Yelp Reviews. Implemented with the Naive Bayes Bayesian Network"
          techArray={[
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
          ]}
        />
        <Projects
          projectTitle="Wolves and Chickens"
          description="The classic wolves and chickens problem solved using Breadth First Search, Depth First Search, Iterative Deepening Depth First Search, and A Star Search."
          techArray={[
            "https://cdn.iconscout.com/icon/free/png-512/c-programming-569564.png",
          ]}
        />
        <Projects
          projectTitle="Wireless Heatmap"
          description="A heat-map of Oregon State University's wireless network. Implemented using Django and the Google Maps Javascript API."
          techArray={[
            "https://cdn.worldvectorlogo.com/logos/django.svg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/1200px-Google_Maps_icon_%282020%29.svg.png",
          ]}
        />
      </div>

      {/* Resume */}

      {/* Experience */}
      <section className="app__experience">
        <div className="app__title">Experience and Education</div>
      </section>
      <Experience />

      {/* Relevant Technologies */}

      {/* Etc.. */}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
