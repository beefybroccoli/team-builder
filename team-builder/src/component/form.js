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
    console.log("event.target.name = ", event.target.name);
    console.log("event.target.value = ", event.target.value);
    set_stateForm({ ...stateForm, [event.target.name]: event.target.value });
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
            name="name"
            type="text"
            value={stateForm.name}
            id="input_name"
            onChange={cb_onChange}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
