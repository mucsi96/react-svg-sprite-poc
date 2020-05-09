import React from "react";
import sprite from "./sprite.svg";

const Icon = ({ className, type }) => (
  <svg className={className}>
    <use href={`${sprite}#${type}`} />
  </svg>
);

export default Icon;
