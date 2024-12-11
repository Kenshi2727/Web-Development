//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const greet = { color: "blue" };

let greeting = "Good Night";
const time = new Date(2024, 12, 11, 19).getHours();

if (time >= 0 && time < 12) {
  greeting = "Good Morning";
  greet.color = "red";
} else if (time >= 12 && time < 18) {
  greeting = "Good Afternoon";
  greet.color = "green";
}

ReactDOM.render(
  <h1 className="heading" style={greet}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
