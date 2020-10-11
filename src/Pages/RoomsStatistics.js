import React from "react";
import "../Styles/RoomStatistics.css";

const RoomsStatistics = () => {
  return (
    <div>
      <section className="roomsstatcardcontainer">
        <div className="cardbody">
          <h1>Card 1</h1>
        </div>
        <div className="cardbody">
          <h1>Card 2</h1>
        </div>
        <div className="cardbody">
          <h1>Card 3</h1>
        </div>
        <div className="cardbody">
          <h1>Card 3</h1>
        </div>
      </section>
      <section className="chart-container">
        <div className="barchart-container">
          <div className="barchart-title">Chart Tittle</div>
          <div className="barchart-body">Bar Chart</div>
        </div>
        <div className="barchart-container">
          <div className="barchart-title">Chart Tittle</div>
          <div className="barchart-body">Pie Chart</div>
        </div>
      </section>
    </div>
  );
};

export default RoomsStatistics;
