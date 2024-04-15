export type Skill = {
  id: number;
  name: string;
  category: "Language" | "Web Development" | "Web3";
  description?: string; // Optional field for additional context
  yearsOfExperience?: number; // Optional field for duration of practice
  proficiencyLevel?: 1 | 2 | 3 | 4 | 5; // Optional field for granular skill level};
};
export const skills: Skill[] = [
  {
    id: 0,
    name: "C",
    category: "Language",
    yearsOfExperience: 1,
    proficiencyLevel: 4,
  },
  {
    id: 1,
    name: "Rust",
    category: "Language",
    yearsOfExperience: 1,
    proficiencyLevel: 2,
  },
  {
    id: 2,
    name: "Typescript",
    category: "Language",
    yearsOfExperience: 2,
    proficiencyLevel: 3,
  },
  {
    id: 3,
    name: "Python",
    category: "Language",
    yearsOfExperience: 2,
    proficiencyLevel: 3,
  },
  {
    id: 4,
    name: "EtherJS",
    category: "Web3",
    yearsOfExperience: 2,
    proficiencyLevel: 2,
  },
  {
    id: 5,
    name: "Hardhat",
    category: "Web3",
    yearsOfExperience: 2,
    proficiencyLevel: 2,
  },
  {
    id: 6,
    name: "Foundry",
    category: "Web3",
    yearsOfExperience: 1,
    proficiencyLevel: 1,
  },
  {
    id: 7,
    name: "NextJS",
    category: "Web Development",
    yearsOfExperience: 2,
    proficiencyLevel: 4,
  },
  {
    id: 8,
    name: "Tailwindcss",
    category: "Web Development",
    yearsOfExperience: 2,
    proficiencyLevel: 5,
  },
];
