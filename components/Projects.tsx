import React from "react";
import CartesianPlane from "./CartesianPlane";

function Projects() {
  return (
    <div className="text-center">
      <div>
        <div className="text-lg font-bold">Current Projects</div>
        <div className="flex flex-col justify-center item-center">
          <div>Philosophy Tools</div>
          <div>Concept Expansion on Cartesian Plane</div>
          {/* <CartesianPlane /> */}
        </div>
      </div>
      <div>
        <div className="text-lg font-bold">Hackathon Projects</div>
        <div className="flex flex-row items-top">
          <div className="flex flex-col">
            <div className="font-bold">Harberger Nouns</div>
            <div>NounsDAO fork with a Harberger Tax Implementation</div>
          </div>
          <div className="flex flex-col">
            <div className="font-bold">Noir-Battle</div>
            <div>
              Implementation of Zupass' zk-eddsa-frog-pcd with Noir, a ZKDSL
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
