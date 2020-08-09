import React, { useEffect, useState } from "react";
import "./Projects.css";
import Tech from "./Tech";
import axios from "./axios";

function Projects({ projectTitle, description, techArray, fetchUrl }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Async task with internal function
    async function fetchData() {
      // Whenever you use an outside var{ vvv } you must put in the brackets[]
      const request = await axios.get(fetchUrl);
      setProjects(request.data);

      // Console log for debugging
      console.log(request.data);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

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
