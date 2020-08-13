import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div className="container">
      <div className={`timeline-block timeline-block-right`}>
        <div className="marker"></div>
        <div id="first" className="timeline-content">
          <h3>'Iolani</h3>
          <span>High School</span>
          <p>
            At 'Iolani I got my first introduction to programming. I took a iPad
            app development course where I learned how to use programs like
            xCode, Github, and Adobe Illustrator.
          </p>
        </div>
      </div>

      <div className={`timeline-block timeline-block-left`}>
        <div className="marker"></div>
        <div className="timeline-content">
          <h3>Oregon State University</h3>
          <span>Bachelors: Computer Science</span>
          <p>
            At Oregon State University, after a quick change in majors I was
            back to programming. I learned more about what Computer Science had
            to offer and was delighted with the change I had made. I enjoyed
            classes like Analysis of Algorithms, AI, Data Structures, Computer
            Architecture, Software Engineering, Mobile Software Development, and
            Web Development.
          </p>
        </div>
      </div>

      <div className="timeline-block timeline-block-right">
        <div className="marker"></div>
        <div className="timeline-content">
          <h3>Undergraduate Physics Teaching Assistant</h3>
          <span>9/2018 - 6/2019</span>
          <p>
            At Oregon State University I had the opportunity to be an
            undergraduate physics TA. It was a new experience working with
            students who were about the same age as me and at this job I learned
            valuable skills like communicating and leading my peers. I was in
            charge of facilitating cooperation and aiding groups of students in
            completing difficult problems and tasks.
          </p>
        </div>
      </div>

      <div className="timeline-block timeline-block-left">
        <div className="marker"></div>
        <div className="timeline-content">
          <h3>Hokulani IT Volunteer</h3>
          <span>7/2020</span>
          <p>
            Currently I am volunteering as IT support at Hokulani Elementary
            school. While looking for a job as a software developer, I am using
            my spare time to help teachers and other staff members prepare for
            the upcoming school year. Amidst the COVID-19 pandemic, educators
            are relying more heavily on technology to deliver quality education
            for the future generations. I want to be able to do my part by
            aiding teachers and students with any technology related problems,
            especially during these uncertain times.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
