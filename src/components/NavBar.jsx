import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/App.css";


const NavBar = () => {
  return (
    <div className="navbar-container">
      <NavLink to={"/posts"}>
        <div>
          <img src="logo.jpg" />
        </div>
      </NavLink>
      <p>Discover</p>
      <p>My Plants</p>
      <p>Diseases</p>
      <p>Blog</p>
      <p>Contacts</p>
    </div>
  );
};

export default NavBar;
