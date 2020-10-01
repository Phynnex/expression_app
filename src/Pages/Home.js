import React from "react";
import { Link } from "react-router-dom";
import { Login } from "../Components/Login";
import { SignUp } from "../Components/SignUp";
import "../Styles/Home.css";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";

export default function Home() {
  return (
    <>
      <section className="home">
        <section className="hometext">
          <Slide right>
            <p>Dont keep all your feelings sheltered, Express them</p>
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
      <section className="abouttext">
        <Bounce left>
          <h1 className="aboutheader">About</h1>
        </Bounce>
        <Zoom bottom>
          <p className="aboutpara">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie
            nunc non blandit massa enim nec dui. Eu lobortis elementum nibh
            tellus molestie. Ut consequat semper viverra nam libero justo
            laoreet. Orci sagittis eu volutpat odio facilisis. Turpis massa
            tincidunt dui ut ornare. Elementum pulvinar etiam non quam lacus
            suspendisse faucibus interdum. Lorem ipsum dolor sit amet
            consectetur. Nam libero justo laoreet sit amet cursus sit amet. Sed
            tempus urna et pharetra pharetra. Orci porta non pulvinar neque
            laoreet suspendisse interdum. Felis eget velit aliquet sagittis id
            consectetur purus ut faucibus. Tincidunt id aliquet risus feugiat in
            ante metus dictum at.
          </p>
        </Zoom>
      </section>
      <section className="forumrules">
        <div classname="rulesicons">
          <span className="fa fa-thumbs-up" aria-hidden="true">
            Like
          </span>
          <span className="fa fa-thumbs-up" aria-hidden="true">
            Like
          </span>
        </div>
      </section>
      <footer className="footer">
        <p className="footertext">copyright 2020 Expression</p>
      </footer>
    </>
  );
}
