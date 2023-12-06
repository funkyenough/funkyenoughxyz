import React from "react";
import CartesianPlane from "./CartesianPlane";

function Projects() {
  return (
    <div className="text-center">
      <div>
        <div className="text-lg font-bold my-8">Current Projects</div>
        <div className="flex flex-col justify-center item-center">
          <div>(Concept Expansion on Cartesian Plane)</div>
          {/* <CartesianPlane /> */}
        </div>
      </div>
      <div>
        <div className="text-lg font-bold my-8">Hackathon Projects</div>
        <div className="flex flex-row items-top">
          <div className="flex flex-col">
            <div className="font-bold">Harberger Nouns</div>
            <div className="mx-5">
              NounsDAO fork with a Harberger Tax Implementation
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-bold">Noir-Battle</div>
            <div className="mx-5">
              Implementation of Zupass' zk-eddsa-frog-pcd with Noir, a ZKDSL
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
