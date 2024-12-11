//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div class="container">
    <h1>Mera Pasandeeda Khana</h1>
    <ul>
      <li>Bacon</li>
      <li>Samosa</li>
      <li>Suar ka Soop</li>
      <li>Camel Pakoda</li>
      <li>Venom based Pizza</li>
    </ul>
  </div>,
  document.getElementById("root")
);
