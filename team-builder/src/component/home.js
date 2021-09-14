import React from "react";
import Dashboard from "./dashboard";
export default function Home(props) {
  return (
    <div>
      <p>Home Page</p>

      <div className="App">
        <header>
          <h2>Team Builder</h2>
        </header>
        <main>
          <Dashboard />
        </main>
      </div>
    </div>
  );
}
