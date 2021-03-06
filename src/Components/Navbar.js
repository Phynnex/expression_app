import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../Components/Login";
import "../Styles/Navbar.css";
import Dropdown from "./Dropdown";
import Context from "../Store/context";
import { useContext } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const { globalState, globalDispatch } = useContext(Context);
  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          EXPRESSION
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/rooms" className="nav-links" onClick={closeMobileMenu}>
              Rooms
            </Link>
            <Link to="/authpage">
                <div className="loginbutton">
                  <Login />
                </div>
            </Link>
          </li>

          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/singlepage"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              <span
                className="fa fa-user 4x"
                aria-hidden="true"
                style={{ outline: "none", cursor: "inherit" }}
              />{" "}
              <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li>
            <Link
              to="/authpage"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/authpage"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
