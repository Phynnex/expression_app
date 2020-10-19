import React, {useState} from "react";
import "../Styles/AuthPage.css";
import Navbar from "../Components/Navbar";
import { useContext } from "react";
import Context from "../Store/context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import { RoomsList } from "../Assets/RoomsList";




export default function AuthPage(props) {
  let history = useHistory();
  const notify = () => {
    toast.success("You have been logged In", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const { globalDispatch, globalState } = useContext(Context);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    console.log(values);
    console.log(JSON.stringify(values));
    fetch("https://expressio-api.herokuapp.com/api/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ user: values }),
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    console.log(values);
    console.log(JSON.stringify(values));
    fetch("https://expressio-api.herokuapp.com/api/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ user: values }),
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((data) => {
        globalDispatch({ type: "LOGIN" });
        const rooms = [];
        const roomTitle = props.match.params.room;
        const room = RoomsList.find((room) => roomTitle === room.title);
        console.log("1", globalState);
        globalDispatch({ type: "ROOM", payload: room });
        console.log("2", globalState);
        // const rooms = [];
        // const roomTitle = props.match.params.room;
        // const roomArray = rooms.filter((r) => r.title === roomTitle);
        // const room = roomArray.length > 0 ? roomArray[0] : {};
        // globalDispatch({ type: "ROOM", payload: room });
        history.push("/singlepagedesign/" + roomTitle);
        notify();
        console.log(data);
        const token = data.user.token;
        console.log(token);
        localStorage.setItem("token", token);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Navbar />
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
                      onSubmit={handleSubmitLogin}
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
                          value={values.email}
                          onChange={handleChange}
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
                          value={values.password}
                          onChange={handleChange}
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
                      onSubmit={handleSubmitSignUp}
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
                          value={values.email}
                          onChange={handleChange}
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
                          value={values.password}
                          onChange={handleChange}
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
                          value={values.password}
                          onChange={handleChange}
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