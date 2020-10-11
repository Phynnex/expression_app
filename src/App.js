import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/Pages/Home";
import About from "../src/Pages/About";
import AuthPage from "../src/Pages/AuthPage";
import Rooms from "../src/Pages/Rooms";
import SinglePage from "../src/Pages/SinglePage";
import AdminDashboard from "./Pages/AdminDashboard";
import Activities from "./Pages/Activities";
import RoomsStatistics from "./Pages/RoomsStatistics";
import UsersData from "./Pages/UsersData";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/authpage" component={AuthPage} />
        <Route path="/singlepage" component={SinglePage} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/admindashboard" component={AdminDashboard} />
        <Route path="/activities" component={Activities} />
        <Route path="/roomsstatistics" component={RoomsStatistics} />
        <Route path="/usersdata" component={UsersData} />
      </Switch>
    </Router>
  );
};

export default App;
