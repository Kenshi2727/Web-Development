import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [submit, setSubmit] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    // console.log(event.target.placeholder);
    // console.log(event.target.type);
    setName(event.target.value);
  }

  function handleSubmit(event) {
    setSubmit(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {submit}</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name} //{name} is replaced with {submit} in h1
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
