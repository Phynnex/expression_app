import React from "react";
import "../Styles/SinglePage.css";

const SinglePage = () => {
  return (
    <>
      <section className="singlepagecontainer">
        <div>
          <div className="singlepagecardcontainer">
            <div className="singlepagecard">
              <div className="singlepagecard-header" />
              <h3 className="singlepagecardheader">Room Name</h3>
              <p className="singlepagecardpara">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                neque molestiae eius explicabo
              </p>
              <a href="/" className="btn">
                Follow
              </a>
            </div>
          </div>
          <div className="postbox">
            <div className="postboxinput">
              <form>
                <input placeholder="Say Something ...." type="text" />
                <button className="postboxbtn">Post</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SinglePage;
