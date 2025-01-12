import React from "react";
import { NavLink as Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        textDecoration: "none",
        paddingTop: "20px",
        backgroundColor: "midnightblue",
        color: "white",
        marginTop: "1rem",
      }}
    >
      <Link
        to="/"
        style={{
          fontSize: "2rem",
          textDecoration: "none",
          listStyle: "none",
          color: "whitesmoke",
        }}
      >
        Volt-News
      </Link>
      <ul
        style={{
          textDecoration: "none",
          listStyle: "none",
          color: "whitesmoke",
        }}
      >
        <li>
          <Link
            to="/news"
            style={{
              textDecoration: "none",
              listStyle: "none",
              color: "whitesmoke",
            }}
          >
            News
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={{
              textDecoration: "none",
              listStyle: "none",
              color: "whitesmoke",
            }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            style={{
              textDecoration: "none",
              listStyle: "none",
              color: "whitesmoke",
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
      <ul
        style={{
          textDecoration: "none",
          listStyle: "none",
          color: "whitesmoke",
        }}
      >
        <li>Career</li>
        <li>Support</li>
        <li>Join/signup</li>
      </ul>
    </div>
  );
};

export default Footer;
