import React, { useState } from "react";

function App() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-US", { hour12: false })
  );
  console.log(time);

  function update() {
    setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
  }

  //upadting time every second
  setInterval(update, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={update}>Get Time</button>
    </div>
  );
}

export default App;
