import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Member(props) {
  useEffect(() => {}, []);

  const { name, role, email, onVacation } = props.input_object;
  return (
    <p>
      <b>Name : </b> {name},<b>Email: </b> {email},<b>Role: </b> {role},
      <b>On Vacation: </b> {String(onVacation)},
    </p>
  );
}
