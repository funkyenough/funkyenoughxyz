import React from "react";
import { projects } from "../data/projects";
import Project from "./Project";

function Projects() {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap">
      {projects.map((project) => (
        <div key={project.id} className="h-full w-full md:w-1/2">
          <Project data={project} />
        </div>
      ))}
    </div>
  );
}

export default Projects;
