import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar ">
        <div className="logo">
          Curriculum Compass
          <br />
          <div className="ai"> By AICTE</div>
        </div>
        <div className="nav">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Organisation</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </div>
        <div className="buttons">
          <button className="btn">
            <Link to="/login">Login</Link>
          </button>
          <button className="btn">
            <Link to="/register">Register</Link>
          </button>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            className="search"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
