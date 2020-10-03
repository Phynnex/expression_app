import React from "react";
import { Link } from "react-router-dom";
import { Login } from "../Components/Login";
import { SignUp } from "../Components/SignUp";
import "../Styles/Home.css";
import Slide from "react-reveal/Slide";


export default function Home() {
  return (
    <>
      <section className="home">
        <section className="hometext">
          <Slide right>
            <p>Dont keep all your feelings sheltered-Express them,</p>
          </Slide>
          <Slide left>
            <p>Dont ever let life shut you up</p>
          </Slide>
          <Link to="/about">
            <button className="readmorebtn">Read More</button>
          </Link>
          <Link to="/authpage">
            <section className="homeauthbtn">
              <Login />
              <SignUp />
            </section>
          </Link>
        </section>
      </section>
      
    </>
  );
}
