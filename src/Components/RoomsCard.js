import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/RoomsCard.css";


function RoomsCard({ title, img, story, match }) {
 
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
          <Link to={"/singlepagedesign/" + title}>
            <div className="property-social-icons">
              <button
                className="join"
              >
                Join
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default RoomsCard;
