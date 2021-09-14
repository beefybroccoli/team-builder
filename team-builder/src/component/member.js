import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Member(props) {
  const [stateMember, set_stateMember] = useState(null);
  const [stateLoading, set_stateLoading] = useState(true);

  //after initial render, store input_object inside stateMember
  useEffect(() => {
    props.input_object && set_stateMember(props.input_object);
  }, []);

  //track stateMember state
  useEffect(() => {
    if (stateMember === null) {
      //when stateMember is null, set stateLoading to true
      set_stateLoading(true);
    } else {
      //when stateMember is not null, set stateLoading to false
      set_stateLoading(false);
    }
  }, [stateMember]);

  //when the stateMember is null, displaying loading message
  if (stateLoading) {
    return <p>{stateLoading ? "Loading..." : ""}</p>;
  }

  //when the stateMember is fully loaded, render the member component
  if (!stateLoading) {
    return (
      <p>
        <b>Name : </b> {stateMember.name},<b>Email: </b> {stateMember.email},
        <b>Role: </b> {stateMember.role},<b>On Vacation: </b>{" "}
        {String(stateMember.onVacation)},
      </p>
    );
  }
} //end function Member
