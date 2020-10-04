import React from "react";
import "../Styles/AuthPage.css";


export default function AuthPage() {
  return (
    <>
      <section>
        <div id="page" className="page">
          <div
            className="main-bg bg bg1"
            style={{ outline: "none", cursor: "inherit" }}
          >
            <h1
              className=" authpageh1 editContent"
              style={{ outline: "none", cursor: "inherit" }}
            >
              Expression
            </h1>
            <div className="sub-main-w3">
              <div
                className="image-style bg bg1"
                style={{ outline: "none", cursor: "inherit" }}
              />
              <div className="vertical-tab">
                <div id="section1" className="section-w3ls">
                  <input
                    type="radio"
                    name="sections"
                    id="option1"
                    defaultChecked
                  />
                  <label htmlFor="option1" className="icon-left-w3pvt">
                    <span
                      className="fa fa-user-circle"
                      aria-hidden="true"
                      style={{ outline: "none", cursor: "inherit" }}
                    />
                    <small
                      className="editContent"
                      style={{ outline: "none", cursor: "inherit" }}
                    >
                      Login
                    </small>
                  </label>
                  <article>
                    <form
                      action="#"
                      method="post"
                      className="editContent"
                      style={{ outline: "none", cursor: "inherit" }}
                    >
                      <h3
                        className="legend editContent"
                        style={{ outline: "none", cursor: "inherit" }}
                      >
                        Login Here
                      </h3>
                      <div
                        className="input editContent"
                        style={{ outline: "none", cursor: "inherit" }}
                      >
                        <span
                          className="fa fa-envelope-o"
                          aria-hidden="true"
                          style={{ outline: "none", cursor: "inherit" }}
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          name="email"
                          required
                        />
                      </div>
                      <div
                        className="input editContent"
                        style={{ outline: "none", cursor: "inherit" }}
                      >
                        <span
                          className="fa fa-key"
                          aria-hidden="true"
                          style={{ outline: "none", cursor: "inherit" }}
                        />
                        <input
                          type="password"
                          placeholder="Password"
                          name="password"
                          required
                        />
                      </div>
                        <button
                          type="submit"
                          className="btn submit"
                          style={{
                            outline: "none",
                            cursor: "inherit",
                            borderRadius: "4px",
                          }}
                        >
                          Login
                        </button>
                      <a
                        href="/"
                        className="bottom-text-w3ls editContent"
                        style={{ outline: "none", cursor: "inherit" }}
                      >
                        Forgot Password?
                      </a>
                    </form>
                  </article>
                </div>
                <div id="section2" className="section-w3ls">
                  <input type="radio" name="sections" id="option2" />
                  <label htmlFor="option2" className="icon-left-w3pvt">
                    <span
                      className="fa fa-user-plus"
                      aria-hidden="true"
                      style={{ outline: "none", cursor: "inherit" }}
                    />
                    <small
                      className="editContent"
                      style={{ outline: "none", cursor: "inherit" }}
                    >
                      Sign Up
                    </small>
                  </label>
                  <article>
                    <form
                      action="#"
                      method="post"
                      className="editContent"
                      style={{ outline: "none", cursor: "inherit" }}
                    >
                      <h3
                        className="legend editContent"
                        style={{ outline: "none", cursor: "inherit" }}
                      >
                        Sign Up Here
                      </h3>
                      <div
                        className="input editContent"
                        style={{ outline: "none", cursor: "inherit" }}
                      >
                        <span
                          className="fa fa-envelope-o"
                          aria-hidden="true"
                          style={{ outline: "none", cursor: "inherit" }}
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          name="email"
                          required
                        />
                      </div>
                      <div
                        className="input editContent"
                        style={{ outline: "none", cursor: "inherit" }}
                      >
                        <span
                          className="fa fa-key"
                          aria-hidden="true"
                          style={{ outline: "none", cursor: "inherit" }}
                        />
                        <input
                          type="password"
                          placeholder="Password"
                          name="password"
                          required
                        />
                      </div>
                      <div
                        className="input editContent"
                        style={{ outline: "none", cursor: "inherit" }}
                      >
                        <span
                          className="fa fa-key"
                          aria-hidden="true"
                          style={{ outline: "none", cursor: "inherit" }}
                        />
                        <input
                          type="password"
                          placeholder="Confirm Password"
                          name="password"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn submit"
                        style={{
                          outline: "none",
                          cursor: "inherit",
                          borderRadius: "4px",
                        }}
                      >
                        Sign Up
                      </button>
                    </form>
                  </article>
                </div>
                <div id="section3" className="section-w3ls">
                  <input type="radio" name="sections" id="option3" />
                  <label htmlFor="option3" className="icon-left-w3pvt">
                    <span
                      className="fa fa-lock"
                      aria-hidden="true"
                      style={{ outline: "none", cursor: "inherit" }}
                    />
                    <small
                      className="editContent"
                      style={{ outline: "none", cursor: "inherit" }}
                    >
                      Forgot Password?
                    </small>
                  </label>
                  <article>
                    <form
                      action="#"
                      method="post"
                      className="editContent"
                      style={{ outline: "none", cursor: "inherit" }}
                    >
                      <h3
                        className="legend last editContent"
                        style={{ outline: "none", cursor: "inherit" }}
                      >
                        Reset Password
                      </h3>
                      <p
                        className="para-style editContent"
                        style={{ outline: "none", cursor: "inherit" }}
                      >
                        Enter your email address below and we'll send you an
                        email with instructions.
                      </p>
                      <p
                        className="para-style-2 editContent"
                        style={{ outline: "none", cursor: "inherit" }}
                      >
                        <strong
                          className="editContent"
                          style={{ outline: "none", cursor: "inherit" }}
                        >
                          Need Help?
                        </strong>{" "}
                        Learn more about how to{" "}
                        <a
                          href="/"
                          className="editContent"
                          style={{ outline: "none", cursor: "inherit" }}
                        >
                          retrieve an existing account.
                        </a>
                      </p>
                      <div
                        className="input editContent"
                        style={{ outline: "none", cursor: "inherit" }}
                      >
                        <span
                          className="fa fa-envelope-o"
                          aria-hidden="true"
                          style={{ outline: "none", cursor: "inherit" }}
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          name="email"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn submit last-btn"
                        style={{
                          outline: "none",
                          cursor: "inherit",
                          borderRadius: "4px",
                        }}
                      >
                        Reset
                      </button>
                    </form>
                  </article>
                </div>
              </div>
              <div className="clear" />
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <p className="footertext">&copy;Copyright 2020 Expression</p>
      </footer>
    </>
  );
}
