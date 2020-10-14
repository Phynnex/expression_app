import React from "react";
import "../Styles/LoginButton.css";
import Context from "../Store/context";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

const FollowRoom = () => {
  let history = useHistory();
  const { globalState, globalDispatch } = useContext(Context);

  return (
    <div>
      {globalState.isFollowing ? (
        <button
          className="followbtn"
          type="button"
          onClick={() => globalDispatch({ type: "FOLLOW ROOM" })}
        >
          FOLLOW ROOM
        </button>
      ) : (
        <button className="followbtn" type="button" onClick={history.push()}>
          FOLLOWING
        </button>
      )}
    </div>
  );
};
export default FollowRoom;
