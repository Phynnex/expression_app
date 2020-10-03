import React from "react";
import "../Styles/Carousel.css";

const Carousel = () => {
  return (
    <>
      <div className="container">
        <div className="slider">
          <div className="slide slide1">
            <div className="caption">
              <h2>
                &quot;Express Yourself, Never Be Afraid To Show Your
                Happiness&quot;
              </h2>
            </div>
          </div>
          <div className="slide slide2">
            <div className="caption">
              <h2>
                &quot;Expressing Yourself Is The Best Way To Get Rid Of Your
                Sadness Or Any Problem in Life!!&quot;
              </h2>
            </div>
          </div>
          <div className="slide slide3">
            <div className="caption">
              <h2>
                &quot;Expressing Yourself Is Not An Art If The Words Flow
                Straight From Your Heart.&quot;
              </h2>
            </div>
          </div>
          <div className="slide slide4">
            <div className="caption">
              <h2>
                &quot;Live to Express Not To Impres. Work For A Cause, Not For
                Applause.&quot;
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Carousel;
