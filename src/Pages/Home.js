import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";
import Slide from "react-reveal/Slide";
import Navbar from "../Components/Navbar";


const Home = () => {
  return (
    <>
      <Navbar />
      <section className="home">
        <section className="hometext">
          <Slide right>
            <p>Don't keep all your feelings sheltered-Express them,</p>
          </Slide>
          <Slide left>
            <p>Don't ever let life shut you up.</p>
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
