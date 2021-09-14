import "./App.css";
import React, { useState, useEffect } from "react";
import Team from "./component/team";
import Dashboard from "./component/dashboard";
import { Switch, Route } from "react-router-dom";

function App() {
  <Switch>
    <Route exact path="/">
      Home
    </Route>
    <Route path="teams/:id">
      <Team />
    </Route>
  </Switch>;

  return (
    <div className="App">
      <header>
        <h2>Team Builder</h2>
      </header>
      <main>
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
