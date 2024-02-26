import React from "react";
import { projects } from "../data/projects";
import Project from "./Project";

function Projects() {
  return (
    <div className="flex flex-col" id="Projects">
      <div className="text-center text-lg font-bold">Projects</div>
      <div className="flex flex-col pt-10 md:flex-row md:flex-wrap">
        {projects.map((project) => (
          <div key={project.id} className="h-full w-full md:w-1/2">
            <Project data={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
