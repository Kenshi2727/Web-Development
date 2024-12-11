import React from "react";
import ReactDOM from "react-dom";

const fname = "Kenshin";
const lname = "Warrior";
const number = 7;

ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}!</h1>
    <h1>
      Hello {fname} {lname}!
    </h1>
    <h1>Hello {`${fname} ${lname}`}!</h1>
    <p>My lucky number is {number}</p>
    <p>My lucky number is {(7 / 2) * 2}</p>
    <p>My lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
