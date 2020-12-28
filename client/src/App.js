import React from "react";
import Navbar from "./modules/layout/components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
let App = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />

        <Switch></Switch>
      </Router>
    </React.Fragment>
  );
};
export default App;
