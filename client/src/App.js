import React from "react";
import Navbar from "./modules/layout/components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Signup from "./modules/user/components/signup/Signup";
import Home from "./modules/layout/components/home/Home";
import Login from "./modules/user/components/login/Login";
let App = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/user/signup" component={Signup}></Route>
        <Route exact path="/user/login" component={Login}></Route>
      </Router>
    </React.Fragment>
  );
};
export default App;
