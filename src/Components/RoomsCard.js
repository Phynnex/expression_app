import React from "react";
import { Link } from "react-router-dom";
import "../Styles/RoomsCard.css";


export function RoomsCard({ title, img, story }) {
  return (
    <div>
      <div className="cardcontainer">
        <div className="property-card">
          <div className="property-image">
            <img src={img} alt="roomsbanner" />
          </div>
          <div className="property-description">
            <h5 className="roomscardtittle" title={title}>
              {title}
            </h5>
            <p className="roomscarddescription" story={story}>
              {story}
            </p>
          </div>
          <Link to={"/authpage/" + title}>
            <div className="property-social-icons">
              <button className="join">Join</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
