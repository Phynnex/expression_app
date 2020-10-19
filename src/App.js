import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/Pages/Home";
import About from "../src/Pages/About";
import AuthPage from "../src/Pages/AuthPage";
import Rooms from "../src/Pages/Rooms";
import SinglePageDesign from "./Components/SinglePageDesign";
import AdminDashboard from "./Pages/AdminDashboard";
import Activities from "./Pages/Activities";
import RoomsStatistics from "./Pages/RoomsStatistics";
import UsersData from "./Pages/UsersData";
import GlobalStateProvider from "./Store/GlobalStateProvider";
import { toast } from "react-toastify";
import CheckAuth from "./Components/CheckAuth";



toast.configure();
const App = (props) => {
  return (
    <GlobalStateProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/authpage/:room" exact component={AuthPage} />
          <Route path="/authpage/" exact component={AuthPage} />
          <Route
            path="/singlepagedesign/:room"
            render={(props) =>
              !CheckAuth() ? (
                <AuthPage {...props} />
              ) : (
                <SinglePageDesign {...props} />
              )
            }
          />
          <Route path="/rooms" component={Rooms} />
          <Route path="/" component={AdminDashboard} />
          <Route path="/activities" component={Activities} />
          <Route path="/roomsstatistics" component={RoomsStatistics} />
          <Route path="/usersdata" component={UsersData} />
          {/* <AuthRoute exact path="/authpage" component={AuthPage} /> */}
        </Switch>
      </Router>
    </GlobalStateProvider>
  );
};
export default App;
