import { getDefaultNormalizer } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Form(props) {
  const initial_state = {
    name: "",
    role: "",
    email: "",
    onVacation: false,
    role: "",
  };

  const [stateForm, set_stateForm] = useState(initial_state);
  const [stateError, set_stateError] = useState(null);

  const cb_onChange = (event) => {
    console.log("event.target.name = ", event.target.name);
    console.log("event.target.value = ", event.target.value);

    if (event.target.name === "onVacation") {
      set_stateForm({
        ...stateForm,
        [event.target.name]: !stateForm.onVacation,
      });
    } else {
      set_stateForm({ ...stateForm, [event.target.name]: event.target.value });
    }
  };

  const cb_onSubmit = (event) => {
    event.preventDefault();
    set_stateForm(initial_state);

    props.set_stateNewMember(stateForm);
  };

  const Form_Div = styled.div`
    border: 1px solid gray;
    margin: 0 5% 0 5%;
  `;

  return (
    <Form_Div>
      {/* <h3>Form.js</h3> */}
      <form onSubmit={cb_onSubmit}>
        <label>
          Name :{" "}
          <input
            name="name"
            type="text"
            value={stateForm.name}
            id="input_name"
            onChange={cb_onChange}
          />
        </label>

        <label>
          Email :{" "}
          <input
            name="email"
            type="text"
            value={stateForm.email}
            id="input_email"
            onChange={cb_onChange}
          />
        </label>
        <br />
        <label>
          Role :{" "}
          <select name="role" value={stateForm.role} onChange={cb_onChange}>
            <option value="(select a role)">(Select a role)</option>
            <option value="developer">Developer</option>
            <option value="it">IT</option>
            <option value="sales">Sales</option>
          </select>
        </label>

        <label>
          On Vacation:{" "}
          <input
            type="checkbox"
            checked={stateForm.onVacation}
            value={stateForm.onVacation}
            name="onVacation"
            onChange={cb_onChange}
          />
        </label>

        <button>Submit</button>
      </form>
    </Form_Div>
  );
}
