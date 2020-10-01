import React from "react";
import { RoomsCard } from "../Components/RoomsCard";
import roomsdata from "../Assets/rooms.json";
import "../Styles/Rooms.css";

const Rooms = () => {
  return (
    <>
      <section className="cards-container">
        {roomsdata.map(({ title, img }) => (
          <RoomsCard title={title} img={img} />
        ))}
      </section>
    </>
  );
};
export default Rooms;