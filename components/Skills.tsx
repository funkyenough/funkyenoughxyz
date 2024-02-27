import React from "react";
// import { skills } from "../data/skills";
// import Skill from "./Skill";

function Skills() {
  return (
    <div className="flex flex-row justify-between text-center">
      <div className="flex flex-col">
        <div className="font-bold">Web3</div>
        <div className="flex flex-col">
          <div>EthersJS</div>
          <div>Hardhat, Foundry</div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="font-bold">Web2</div>
        <div className="flex flex-col">
          <div>NextJS13</div>
          <div>TailwindCSS</div>
        </div>
      </div>
      {/* {skills.map((skill, index) => (
      <Skill key={index} data={skill} />
      ))} */}
    </div>
  );
}

export default Skills;
