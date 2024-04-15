import React from "react";
import { skills } from "../data/skills";
import Skill from "./Skill";
import type { Skill as SkillType } from "../data/skills";

const categories = Array.from(new Set(skills.map((skill) => skill.category)));
function Skills() {
  return (
    <div className="flex flex-row justify-between text-center">
      {categories.map((category) => {
        // Filter skills by category
        const skillsInCategory = skills.filter(
          (skill) => skill.category === category,
        );
        const sortedSkills = skillsInCategory.sort((a, b) => {
          const aProficiency = a.proficiencyLevel || 0;
          const bProficiency = b.proficiencyLevel || 0;
          return bProficiency - aProficiency;
        });

        return (
          <div key={category} className="flex flex-col">
            <div className="mb-4 font-bold">{category}</div>
            {sortedSkills.map((skill) => (
              <Skill key={skill.id} data={skill} />
            ))}
          </div>
        );
      })}
    </div>
    // </div>
  );
}

export default Skills;
