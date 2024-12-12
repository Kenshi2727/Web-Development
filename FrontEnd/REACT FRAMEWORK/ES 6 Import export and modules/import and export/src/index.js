import React from "react";
import ReactDOM from "react-dom";
// import pi, { doublePi, tripplePi } from "./math";
import * as pi from "./math";
ReactDOM.render(
  <ul>
    {/* <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{tripplePi()}</li> */}
    <li>{pi.default}</li>
    <li>{pi.doublePi()}</li>
    <li>{pi.tripplePi()}</li>
  </ul>,
  document.getElementById("root")
);
