import React from "react";
import { RoomsCard } from "../Components/RoomsCard";
import roomsdata from "../Assets/rooms.json";
import "../Styles/Rooms.css";
import Navbar from "../Components/Navbar";

const Rooms = () => {
  return (
    <>
      <Navbar />
      <section className="roomscontainer">
        <h2 className="roomsheader">Expression</h2>
        <p className="roomspara">
          Welcome! Have a look around and join the discussions
        </p>
        <section className="cards-container">
          {roomsdata.map(({ title, img, story }) => (
            <RoomsCard title={title} img={img} story={story} />
          ))}
        </section>
      </section>
      <footer className="footer">
        <p className="footertext">&copy;Copyright 2020 Expression</p>
      </footer>
    </>
  );
};
export default Rooms;