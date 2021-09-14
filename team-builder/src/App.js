import "./App.css";
import React, { useState, useEffect } from "react";
import Team from "./component/team";
import Dashboard from "./component/dashboard";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./component/home";

function App() {
  return (
    <Switch>
      <Route path="/teams/:id">
        <Team />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        render={() => {
          return (
            <div>
              <p>Page 404</p>
            </div>
          );
        }}
      />
    </Switch>
  );
}

export default App;
