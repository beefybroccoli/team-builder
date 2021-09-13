import React, { useState, useEffect } from "react";

export default function Form(props) {
  const initial_state = {
    name: "",
    role: "",
    email: "",
  };

  const [stateForm, set_stateForm] = useState(initial_state);
  const [stateError, set_stateError] = useState(null);

  const cb_onChange = (event) => {
    console.log("event.target = ", event.target);
    console.log("event.value = ", event.value);
  };

  const cb_onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h3>Form.js</h3>
      <form onSubmit={cb_onSubmit}>
        <label>
          Name :{" "}
          <input
            name=""
            type="text"
            value=""
            id="input_name"
            onChange={cb_onChange}
          />
        </label>
      </form>
    </div>
  );
}
