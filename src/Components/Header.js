import React from "react";
import { Link } from "react-router-dom";
// import { SidebarData } from "../Components/SidebarData";
import "../Styles/Header.css";

const Header = () => {
  return (
    <>
      <section className="logo-header">
        <h1 className="logo-text">Expression</h1>
      </section>
      <header>
        <ul>
          <li>
            <Link to="/admindashboard">Home</Link>
          </li>

          <li>
            <Link to="/activities">Posts</Link>
          </li>
          <li>Authentication</li>
          <li>Errors</li>
        </ul>
      </header>
    </>
  );
};

export default Header;
