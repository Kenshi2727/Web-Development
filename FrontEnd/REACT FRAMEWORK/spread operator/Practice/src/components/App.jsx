import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setText(newValue);
  }

  function Add(event) {
    setItems((prev) => [...prev, text]);
    setText(""); //so that after add button is clicked the input disappears from the input area
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={text} />
        <button onClick={Add}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li key={items.indexOf(item)}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
