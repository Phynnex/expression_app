import React from "react";
import CountUp, { useCountUp } from "react-countup";
import { Link } from "react-router-dom";
import "../Styles/Counter.css";

const Counter = () => {
  // eslint-disable-next-line no-unused-vars
  const { countUp } = useCountUp({
    duration: 5,
    end: 10000,
    // startOnMount: false,
  });
  return (
    <div className="countercontainer">
      <div className="counterwrapper">
        <i className="fasicons fas fa-history"></i>
        <h1 className="counternumbers">
          <CountUp start={1000} end={10513} duration={3} />
        </h1>
        <div className="countertext">Stories</div>
      </div>
      <div className="counterwrapper">
        <i className="fasicons fas fa-users"></i>
        <h1 className="counternumbers">
          <CountUp start={800} end={1304} duration={4} />
        </h1>
        <div className="countertext">Users</div>
      </div>
      <div className="counterwrapper">
        <Link to="/rooms">
          <i className="fasicons fas fa-home"></i>
        </Link>
        <h1 className="counternumbers">
          <CountUp start={250} end={15} duration={5} />
        </h1>
        <div className="countertext">Chat Rooms</div>
      </div>
      <div className="counterwrapper">
        <i className="fasicons fas fa-fingerprint"></i>
        <h1 className="counternumbers">
          <CountUp start={800} end={1300} duration={4} />
        </h1>
        <div className="countertext">Protected Identities</div>
      </div>
    </div>
  );
};

export default Counter;
