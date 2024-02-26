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
    id: 1,
    name: "Harberger Nouns",
    description: "NounsDAO fork with a Harberger Tax Implementation",
    category: "Hackathon",
    stack: "Solidity, Hardhat, Ethers.js, React",
    status: "Incomplete",
    url: "https://github.com/funkyenough/HarbergerNouns",
  },
  {
    id: 2,
    name: "Noir-Battle",
    description:
      "Implementation of Zupass' zk-eddsa-frog-pcd with Noir, a ZKDSL",
    category: "Hackathon",
    stack: "Noir, Rust, Solidity, Hardhat, Ethers.js, React",
    status: "Incomplete",
    url: "https://github.com/alexkeating/noir-battle",
  },
  {
    id: 3,
    name: "near-rust-sdk",
    description: "Issue #1116 - Add Generic Support for PanicOnDefault",
    category: "Open Source",
    stack: "Rust, Near",
    status: "In Progress",
    url: "",
  },
  {
    id: 4,
    name: "Arbitrum Stylus Benchmark",
    description: "Benchmarking the Stylus Rollup on Arbitrum",
    category: "Personal",
    stack: "Stylus, Solidity, Hardhat, Foundry, ethers-rs",
    status: "In Progress",
    url: "",
  },
];
