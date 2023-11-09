import React from "react";
import { NavLink } from "react-router-dom";

const Navlink = ({ path }) => {
  return (
    <li>
      <NavLink to={`/${path}`}>{path}</NavLink>
    </li>
  );
};

export default Navlink;
