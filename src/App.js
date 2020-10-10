import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/pages/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' />
      </Switch>
    </Router>
  );
}

export default App;
