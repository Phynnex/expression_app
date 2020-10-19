import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { debugContextDevtool } from "react-context-devtool";

const container = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  container
);
debugContextDevtool(container, {});

