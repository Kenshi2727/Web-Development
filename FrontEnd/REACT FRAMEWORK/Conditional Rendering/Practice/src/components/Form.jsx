import React from "react";
import App from "./App";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {/* {props.userIsRegistered ? null : (
        <input type="password" placeholder="Confirm Password" />
      )} */}
      {!props.userIsRegistered && (
        <input type="password" placeholder="Confirm Password" />
      )}
      <button type="submit">
        {props.userIsRegistered ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default Form;
