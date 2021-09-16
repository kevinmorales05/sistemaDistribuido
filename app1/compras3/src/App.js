import "./App.css";
import React, { useState } from "react";
import BuyClothes from "./pages/buyClothes";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Payment from "./pages/Payment";
import Success from "./pages/Success";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/clothes">
            <BuyClothes />
          </Route>
          <Route path="/inicio">
            <Inicio />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
