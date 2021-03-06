import React from "react";
import "../Styles/LoginButton.css";
import Context from "../Store/context";
import { useContext } from "react";
import { useHistory } from "react-router-dom";



const Login = () => {
  let history = useHistory();
  const { globalState, globalDispatch } = useContext(Context);

  return (
    <div>
      {globalState.isLoggedIn ? (
        <button
          className="authbtn"
          type="button"
          onClick={() => globalDispatch({ type: "LOG OUT" })}
        >
          LOG OUT
        </button>
      ) : (
        <button
          className="authbtn"
          type="button"
          onClick={() => history.push("/authpage")}
        >
          LOGIN
        </button>
      )}
    </div>
  );
};
export default Login;
