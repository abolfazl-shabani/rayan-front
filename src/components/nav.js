import React from "react";
import { NavLink } from "react-router-dom";
import Navlink from "./navlink";
import "../styles/navigation.css";
import logo from "../logo.svg";

const Nav = () => {
  const links = ["register", "login"];
  return (
    <div id="nav">
      <div className="nav__logo-container">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>

      <ul className="nav__links-container">
        {links.map((el, i) => {
          return <Navlink key={i} path={el} />;
        })}
      </ul>
    </div>
  );
};

export default Nav;
