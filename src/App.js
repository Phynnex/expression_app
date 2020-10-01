import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/Pages/Home";
import About from "../src/Pages/About";
import AuthPage from "../src/Pages/AuthPage";
import Rooms from "../src/Pages/Rooms";
import Profile from "../src/Pages/Profile";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/authpage" component={AuthPage} />
        <Route path="/profile" component={Profile} />
        <Route path="/rooms" component={Rooms} />
      </Switch>
    </Router>
  );
}

export default App;
