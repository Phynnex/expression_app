import React from "react";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import Counter from "../Components/Counter";
import ForumRules from "../Components/ForumRules";
import Carousel from "../Components/Carousel";
import "../Styles/AboutPage.css";
import Navbar from "../Components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <Carousel />
      {/* <section className="clear"></section> */}
      <section className="abouttextandimagecontainer">
        <section className="abouttextcontainer">
          <section className="abouttext">
            <Bounce left>
              <h1 className="aboutheader">About</h1>
            </Bounce>
            <Zoom bottom>
              <p className="aboutpara">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Molestie nunc non blandit massa enim nec dui. Eu lobortis
                elementum nibh tellus molestie. Ut consequat semper viverra nam
                libero justo laoreet. Orci sagittis eu volutpat odio facilisis.
                Turpis massa tincidunt dui ut ornare. Elementum pulvinar etiam
                non quam lacus suspendisse faucibus interdum. Lorem ipsum dolor
                sit amet consectetur.
              </p>
            </Zoom>
          </section>
        </section>
      </section>
      <section className="aboutimage"></section>
      <section className="clear"></section>
      <section className="countercomponent">
        <Counter />
      </section>

      <ForumRules />
      <footer className="footer">
        <p className="footertext">&copy;Copyright 2020 Expression</p>
      </footer>
    </>
  );
}
