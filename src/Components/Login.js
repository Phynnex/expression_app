import React from "react";
import "../Styles/AuthButton.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Link to="authpage">
      <button className="authbtn">Login </button>
    </Link>
  );
};
export default Login;
