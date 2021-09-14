import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Member(props) {
  const [stateMember, set_stateMember] = useState(null);
  const [stateLoading, set_stateLoading] = useState(true);

  useEffect(() => {
    props.input_object && set_stateMember(props.input_object);
  }, []);

  useEffect(() => {
    //after stateMember is not null, set stateLoading to false
    stateMember && set_stateLoading(false);
  }, [stateMember]);

  if (stateLoading) {
    return <p>{stateLoading ? "Loading..." : ""}</p>;
  }

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
