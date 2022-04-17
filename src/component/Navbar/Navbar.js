import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <Link className="logo-link" to="/">
          Navbar
        </Link>
        <div>
          <NavLink
            className={({ isActive }) => (isActive ? "Active-link" : "link")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "Active-link" : "link")}
            to="/Blog"
          >
            Blog
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "Active-link" : "link")}
            to="/Services"
          >
            Services
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
