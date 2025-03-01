import React from "react";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">PERFUMY</div>
      <ul className="nav-links">
        <li><a href="#">Home |</a></li>
        <li><a href="#">Product |</a></li>

        <li><a href="#">About |</a></li>
        <li><a href="#">Contact|</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
