import React from "react";
import ReactDOM from "react-dom";

const customstyle = {
  color: "red",
  fonstSize: "20px",
  border: "1px solid black",
};

if (new Date().getMilliseconds() % 2 === 0) customstyle.color = "green";

ReactDOM.render(
  <h1 style={customstyle}>Hello World!</h1>,
  document.getElementById("root")
);
