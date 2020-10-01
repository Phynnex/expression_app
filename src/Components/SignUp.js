import React from "react";
import "../Styles/AuthButton.css";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Link to="authpage">
      <button className="authbtn">Sign Up</button>
    </Link>
  );
}
