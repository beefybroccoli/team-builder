import React, { useState, useEffect } from "react";
import Form from "./form";
import { sample_data } from "./constant";
import styled from "styled-components";
import Member from "./member";

export default function Team(props) {
  const [stateTeamMembers, set_stateTeamMember] = useState(sample_data);
  const [stateNewMember, set_stateNewMember] = useState(null);

  //run when the component initially render
  useEffect(() => {
    props.input_object.teamMembers &&
      set_stateTeamMember(props.input_object.teamMembers);
  }, []);

  //run when stateNewMember change
  useEffect(() => {
    if (stateNewMember) {
      console.log("stateNewMember = ", stateNewMember);

      //add member to Member_List
      set_stateTeamMember([...stateTeamMembers, stateNewMember]);

      //reset stateNewMember to null
      set_stateNewMember(null);
    }
  }, [stateNewMember]);

  //   const { teamName } = props.input_object;

  const Team_Div = styled.div`
    border: 1px solid black;
    width: 80%;
    margin: 10%;
  `;

  return (
    <Team_Div>
      <h2>(Team.js)</h2>
      <h3>{props.input_object && props.input_object.teamName}</h3>

      <Form set_stateNewMember={set_stateNewMember} />

      {stateTeamMembers &&
        stateTeamMembers.map((eachMember, index) => {
          return <Member input_object={eachMember} />;
        })}
    </Team_Div>
  );
}
