import React from "react";
import Project from "./Project";

const projects = require("../projects.json");

function renderProject(project, index) {
  return <Project index={index} project={project} />;
}

function Projects() {
  return (
    <div id="projects" className="projects">
      <h1>Projects</h1>
      <h2 style={{ maxWidth: "90%" }}>
        Being a Professional , I love to repect the confidentiality with my
        organizations and so I can't flaunt the work I did there.
        <br />
        But, still there's plenty I have to show..... Hope you Like it!!!!{" "}
      </h2>
      <div className="project-content">{projects.map(renderProject, this)}</div>
    </div>
  );
}

export default Projects;
