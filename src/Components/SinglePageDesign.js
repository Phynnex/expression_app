import React from "react";
import "../Styles/SinglePageDesign.css";
import Navbar from "../Components/Navbar";
import Context from "../Store/context";
import { useContext } from "react";
// import { RoomsList } from "../Assets/RoomsList";

const SinglePage = () => {
  const { globalState } = useContext(Context);
  // const { globalDispatch } = useContext(Context);
  
  // useEffect(() => {
  //   console.log(match);
  //   const title = match.params.room;
  //   const room = RoomsList.find((room) => title === room.title);
  //   globalDispatch({ type: "ROOM", payload: room });
  // }, []);

  
  // localStorage.setItem("followId", "id");

  // const followRoom = () => {
  //   fetch("https://expressio-api.herokuapp.com/api/users/follow?", {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Token " + localStorage.getItem("jwt"),
  //     },
  //     body: JSON.strigify({
  //       // id,,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };

  return (

    <>
      <Navbar />
      <section>
        <div className="carousel-container">
          <div>
            <img
              className="imagecontainer"
              src={globalState.room.img}
              alt="imagecontainer"
            />
          </div>
          <div className="carousel-text">
            <h2 className="room-title">{globalState.room.title}</h2>
            <p className="room-decription">{globalState.room.story}</p>
            <button className="followbtn">
              Follow Room
            </button>
          </div>
        </div>
      </section>
      <section className="flex-container">
        <div className="flex-item">
          <div className="comment-section">
            <input
              type="text"
              placeholder="Tittle"
              required
              className="comment-tittle"
            />
            <textarea
              placeholder="Express your thoughts...."
              className="comment-text"
            />
            <button className="postbtn">Post</button>
          </div>
        </div>
        <div className="flex-item">
          {/* <div className="follow-room">
            <button className="followbtn">Follow Room</button>
          </div> */}
          <div className="views-posts">
            <p>
              <i className="far fa-comment"></i>Comments
            </p>
            <p>
              <i className="far fa-eye"></i>Views
            </p>
          </div>
          <div className="other-rooms">
            <h2> Other Rooms</h2>

            <p>Yoga</p>
            <p>Cheating in Marriage</p>
            <p>Couple Finance</p>
            <p>Sex Positions</p>
            <p>Exersicer for sex</p>
            <p>Healthy Eating</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default SinglePage;
