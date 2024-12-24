import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  function changeColorOver() {
    setColor("black");
  }

  function changeColorOut() {
    setColor("white");
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOut={changeColorOut}
        onMouseOver={changeColorOver}
        style={{ backgroundColor: color }} //atrribute styling as js objet
      >
        Submit
      </button>
    </div>
  );
}

export default App;
