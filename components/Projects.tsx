import React from "react";
import CartesianPlane from "./CartesianPlane";

function Projects() {
  return (
    <div>
      <div>
        <div className="text-lg font-bold">Current Projects</div>
        <div className="flex flex-col justify-center item-center">
          <div>Philosophy Tools</div>
          <div>Concept Expansion on Cartesian Plane</div>
          <CartesianPlane />
        </div>
      </div>
      <div>
        <div className="text-lg font-bold">Past Projects</div>
      </div>
    </div>
  );
}

export default Projects;
