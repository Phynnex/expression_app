import React, { useState, useEffect } from "react";
import RoomsCard from "../Components/RoomsCard";
import { RoomsList } from "../Assets/RoomsList";
import "../Styles/Rooms.css";
import Navbar from "../Components/Navbar";


const Rooms = () => {
  const [roomsData, setRoomsData] = useState([]);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    const data = await fetch(
      "https://expressio-api.herokuapp.com/api/rooms/love"
    );
    const rooms = await data.json();
    console.log(rooms);
    setRoomsData(rooms);
  };

  // fetch("https://expressio-api.herokuapp.com/api/rooms/romance")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data))
  //   .catch((err) => console.log(err));
  return (
    <>
      <Navbar />
      <section className="roomscontainer">
        <h2 className="roomsheader">Expression</h2>
        <p className="roomspara">
          Welcome! Have a look around and join the discussions
        </p>
        <section className="cards-container">
          {RoomsList.map(({ title, img, story }) => (
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