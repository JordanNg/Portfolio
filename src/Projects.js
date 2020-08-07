import React from "react";
import "./Projects.css";
import Tech from "./Tech";

function Projects({ projectTitle, description, techArray }) {
  return (
    <div className="projects__container">
      {/* Title */}
      <h3 className="project__title">{projectTitle}</h3>
      {/* Description */}
      <p className="project__description">{description}</p>
      {/* Give an array of technologies to add to this project */}
      <div className="project__techContainer">
        {techArray?.map((techItem) => (
          <div>
            <Tech tech={techItem} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
