import React from "react";
import type { Skill } from "../data/skills";

function Skill(props: { data: Skill }) {
  return <div>{props.data.name}</div>;
}

export default Skill;
