import React from "react";
import Login from "./Login";

// var isLoggedIn = false;
var isLoggedIn = true;

function App() {
  return (
    <div className="container">{isLoggedIn ? <Login /> : <h1>Hello</h1>}</div>
  );
}

export default App;
