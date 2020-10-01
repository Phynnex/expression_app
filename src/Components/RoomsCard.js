import React from "react";
import "../Styles/RoomsCard.css";

export function RoomsCard({ title, img }) {
  return (
    <div>
      <div className="cardcontainer">
        <div className="property-card">
          <a href="/">
            <div className="property-image">
              <img src={img} alt="roomsbanner" />
            </div>
          </a>
          <div className="property-description">
            <h5 className="roomscardtittle" title={title}>
              {title}
            </h5>
            <p className="roomscarddescription">
              Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More
              Bingo. Lorem Ipum doth be hard.
            </p>
          </div>
          <a href="/">
            <div className="property-social-icons">
              {/* <span
                className="fa fa-key"
                aria-hidden="true"
                style={{ outline: "none", cursor: "inherit" }}
              /> */}
              {/* I would usually put multipe divs inside here set to flex. Some people might use Ul li. Multiple Solutions */}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
