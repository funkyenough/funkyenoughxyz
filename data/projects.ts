export type Project = {
  id: number;
  name: string;
  description: string;
  category: "Open Source" | "Hackathon" | "Personal";
  stack: string;
  status: "Incomplete" | "In Progress" | "Complete";
  url: string;
};

export const projects: Project[] = [
  {
    id: 0,
    name: "funkyenough.xyz",
    description: "Personal Website, which you are currently viewing.",
    category: "Personal",
    stack: "NextJS, React, Tailwindcss, Vercel",
    status: "In Progress",
    url: "https://github.com/funkyenough/funkyenoughxyz",
  },
  {
    id: 1,
    name: "near-rust-sdk",
    description: "Issue #1116 - Add Generic Support for PanicOnDefault",
    category: "Open Source",
    stack: "Rust, Near",
    status: "In Progress",
    url: "",
  },
  {
    id: 2,
    name: "Arbitrum Stylus Benchmark",
    description: "Benchmarking the Stylus Rollup on Arbitrum",
    category: "Personal",
    stack: "Stylus, Solidity, Hardhat, Foundry, ethers-rs",
    status: "In Progress",
    url: "",
  },
  {
    id: 3,
    name: "Harberger Nouns",
    description: "NounsDAO fork with a Harberger Tax Implementation",
    category: "Hackathon",
    stack: "Solidity, Hardhat, Ethers.js, React",
    status: "Incomplete",
    url: "https://github.com/funkyenough/HarbergerNouns",
  },
  {
    id: 4,
    name: "Noir-Battle",
    description:
      "Implementation of Zupass' zk-eddsa-frog-pcd with Noir, a ZKDSL",
    category: "Hackathon",
    stack: "Noir, Rust, Solidity, Hardhat, Ethers.js, React",
    status: "Incomplete",
    url: "https://github.com/alexkeating/noir-battle",
  },
];
