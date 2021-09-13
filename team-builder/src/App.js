import "./App.css";
import Form from "./component/form.js";
import React, { useState, useEffect } from "react";

function App() {
  const intial_state = [
    { name: "tom", role: "manager", email: "tom@gmail.com" },
  ];
  const [stateTeamMembers, set_stateTeamMember] = useState(intial_state);
  const [stateNewMember, set_stateNewMember] = useState(null);

  useEffect(() => {
    if (stateNewMember) {
      console.log("stateNewMember = ", stateNewMember);

      //add member to Member_List
      set_stateTeamMember([...stateTeamMembers, stateNewMember]);

      //reset stateNewMember to null
      set_stateNewMember(null);
    }
  }, [stateNewMember]);

  return (
    <div className="App">
      <header>
        <h2>Team Builder</h2>
      </header>
      <main>
        <Form set_stateNewMember={set_stateNewMember} />
      </main>
      {stateTeamMembers &&
        stateTeamMembers.map((eachMember, index) => {
          return (
            <p key={index}>
              <b>Name : </b>
              {eachMember.name}, <b>Role: </b>
              {eachMember.role}, <b>Email: </b> {eachMember.email}
            </p>
          );
        })}
    </div>
  );
}

export default App;
