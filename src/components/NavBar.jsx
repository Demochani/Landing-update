import React from "react";
import "./styles/App.css";


const NavBar = () => {
  return (
    <div className="navbar-container">
        <div>
          <img src="logo.jpg" />
        </div>
      <p>Discover</p>
      <p>My Plants</p>
      <p>Diseases</p>
      <p>Blog</p>
      <p>Contacts</p>
    </div>
  );
};

export default NavBar;
