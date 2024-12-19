import React from "react";
import Form from "./Form";

// var userIsRegistered = true;
var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Form userIsRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
