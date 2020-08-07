import React from "react";
import "./Tech.css";

function Tech({ tech }) {
  return <img className="tech__icon" src={tech} alt={tech} />;
}

export default Tech;
