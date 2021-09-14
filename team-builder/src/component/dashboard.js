import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Team from "./team";
import { list_of_teams } from "./constant";
export default function Dashboard(props) {
  return (
    <div>
      <h2>Dashboard.js</h2>
      <div>
        {list_of_teams.map((eachTeam, index) => {
          return <Team input_object={eachTeam} key={index} />;
        })}
      </div>
    </div>
  );
}
