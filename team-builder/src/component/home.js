import React from "react";
import Dashboard from "./dashboard";
export default function Home(props) {
  return (
    <div className="App">
      <header>
        <h2>Home Page - Team Builder</h2>
      </header>
      <main>
        <Dashboard />
      </main>
    </div>
  );
}
