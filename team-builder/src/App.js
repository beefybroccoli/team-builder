import "./App.css";
import Form from "./component/form.js";
import React, { useState, useEffect } from "react";
import Team from "./component/team";
import { list_of_teams } from "./component/constant";

function App() {
  return (
    <div className="App">
      <header>
        <h2>Team Builder</h2>
      </header>
      <main>
        {list_of_teams.map((eachTeam, index) => {
          return <Team input_object={eachTeam} key={index} />;
        })}
      </main>
    </div>
  );
}

export default App;
