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
          projectTitle="Portfolio"
          description="This portfolio's code! I used this portfolio as a way to learn React, Firebase, and other technologies. It includes a small grid of Conway's Game of Life which starts with a random board each time."
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
