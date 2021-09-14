import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Form from "./form";
import { useParams, useRouteMatch } from "react-router-dom";
import Member from "./member";
import { list_of_teams } from "./constant.js";

export default function Team(props) {
  const [stateTeamMembers, set_stateTeamMembers] = useState(null);
  const [stateNewMember, set_stateNewMember] = useState(null);
  const { id } = useParams();
  const { url } = useRouteMatch();

  //run when the component initially render
  useEffect(() => {
    props.input_object && set_stateTeamMembers(props.input_object.teamMembers);

    id && set_stateTeamMembers(list_of_teams[id - 1].teamMembers);
  }, []);

  //run when stateNewMember change
  useEffect(() => {
    if (stateNewMember) {
      console.log("stateNewMember = ", stateNewMember);

      //add member to Member_List
      set_stateTeamMembers([...stateTeamMembers, stateNewMember]);

      //reset stateNewMember to null
      set_stateNewMember(null);
    }
  }, [stateNewMember]);

  const Team_Div = styled.div`
    border: 1px solid black;
    width: 80%;
    margin: 10%;
  `;

  return (
    <Team_Div>
      <h2>Team.js</h2>
      <p>
        id={id}, url={url}
      </p>

      <h3>{props.input_object && props.input_object.teamName}</h3>

      <Form set_stateNewMember={set_stateNewMember} />

      {stateTeamMembers &&
        stateTeamMembers.map((eachMember, index) => {
          return <Member key={index} input_object={eachMember} />;
        })}
    </Team_Div>
  );
}
