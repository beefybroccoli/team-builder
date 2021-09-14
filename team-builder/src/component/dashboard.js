import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Team from "./team";
import { list_of_teams } from "./constant";
import { NavLink } from "react-router-dom";
export default function Dashboard(props) {
  const Dashboard_Div = styled.div`
    border: 1px solid red;
    padding: 0;
    margin: 0, 2%, 5%, 5%;
  `;
  return (
    <Dashboard_Div>
      <h2>Dashboard.js</h2>
      <div>
        {list_of_teams.map((eachTeam, index) => {
          return (
            <div>
              <NavLink to={`/teams/${index + 1}`}>
                {eachTeam.teamName} Team
              </NavLink>
              <Team input_object={eachTeam} key={index} />
            </div>
          );
        })}
      </div>
    </Dashboard_Div>
  );
}
