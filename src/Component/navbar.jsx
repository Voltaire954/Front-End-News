import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink as Link } from "react-router-dom";
import { SiCircuitverse } from "react-icons/si";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-bar">
      <div className="nav-left">
        <Link to="/">
          <SiCircuitverse />
        </Link>
      </div>
      <h2 className="crime">VOLT-NEWS</h2>
      <div className="fa-bars" onClick={toggleMenu}>
        <FaBarsStaggered />
      </div>
      <div className="nav-right">
        <span className={isOpen ? "open" : ""}>
          <Link to="/news">NEWS</Link>
        </span>

        <span className={isOpen ? "open" : ""}>
          <Link to="/about">ABOUT</Link>
        </span>

        <span className={isOpen ? "open" : ""}>
          <Link to="/contact">CONTACT</Link>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
