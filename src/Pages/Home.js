import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";
import Slide from "react-reveal/Slide";


const Home = () => {
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
        </section>
      </section>
      <section className="footer">
        <p className="footertext">&copy;Copyright 2020 Expression</p>
      </section>
    </>
  );
};

export default Home;
