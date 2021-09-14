import "./App.css";
import Form from "./component/form.js";
import React, { useState, useEffect } from "react";
import Team from "./component/team";
import Dashboard from "./component/dashboard";

function App() {
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
