import React from "react";
import "../Styles/ForumRules.css";

const ForumRules = () => {
  return (
    <>
      <section className="forumrules">
        <h1 className="forumrulesheader">Forum Rules</h1>
        <section className="rulesicons">
          <div className="wrapper">
            <div className="icons">
              <i className="faicons far fa-comment-alt"></i>
            </div>
            <div className="rulestext">No Offensive Content</div>
          </div>
          <div className="wrapper">
            <div className="icons">
              <i className="faicons far fa-copyright"></i>
            </div>
            <div className="rulestext">
              No Spreading Of Copyrighted Materials
            </div>
          </div>

          <div className="wrapper">
            <div className="icons">
              <i className="faicons fas fa-tv"></i>
            </div>
            <div className="rulestext">No Advertising</div>
          </div>

          <div className="wrapper">
            <div className="icons">
              <i className="faicons far fa-thumbs-up"></i>
            </div>
            <div className="rulestext">Be Nice</div>
          </div>

          <div className="wrapper">
            <div className="icons">
              <i className="faicons far fa-meh-rolling-eyes"></i>
            </div>
            <div className="rulestext">No Trolling </div>
          </div>

          <div className="wrapper">
            <div className="icons">
              <i className="faicons fas fa-gavel"></i>
            </div>
            <div className="rulestext">Admin Descion Is Final</div>
          </div>
        </section>
      </section>
    </>
  );
};

export default ForumRules;
