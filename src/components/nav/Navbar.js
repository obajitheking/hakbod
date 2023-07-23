import React, { useState } from "react";
import "./Navbar.css";
import loti from '../../images/path1.jpg'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar1 container">
      <span className="nav-logo"> <a  href="www.google.com"><img src={loti} alt='logos' /></a></span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/">Home</a>
        <Link to='/About'><a href="/about">About</a></Link>
    
        <a href="/contact">Contact</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
