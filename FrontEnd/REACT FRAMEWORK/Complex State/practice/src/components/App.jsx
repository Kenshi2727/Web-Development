import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleClick(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setContact((prev) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prev.lName,
          email: prev.email,
        };
      } else if (name === "lName") {
        return {
          fName: prev.fName,
          lName: value,
          email: prev.email,
        };
      } else {
        return {
          fName: prev.fName,
          lName: prev.lName,
          email: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          name="lName"
          onChange={handleChange}
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          name="email"
          onChange={handleChange}
          value={contact.email}
          placeholder="Email"
        />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;
