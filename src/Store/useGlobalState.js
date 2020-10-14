import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        isLoggedIn: true,
      };
    case "LOG OUT":
      return {
        isLoggedIn: false,
      };
    case "FOLLOW ROOM":
      return {
        isFollowing: true,
      };
    case "FOLLOWING":
      return {
        isFollowing: false,
      };
    case "ROOM":
      return {
        room: action.payload,
      };
    default: {
      return state;
    }
  }
};

const useGlobalState = () => {
  const [globalState, globalDispatch] = useReducer(reducer, {
    isFollowing: false,
    isLoggedIn: false,
    room: {},
  });

  return { globalState, globalDispatch };
};

export default useGlobalState;
