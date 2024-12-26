import React, { useState } from "react";

function App() {
  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");

  // function handleFname(event) {
  //   console.log(event.target.value);
  //   setFname(event.target.value);
  // }

  // function handleLname(event) {
  //   console.log(event.target.value);
  //   setLname(event.target.value);
  // }

  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleChange(event) {
    // const newValue = event.target.value;
    // const inputName = event.target.name; //which element is inputted

    const { value, name } = event.target;

    // console.log("new value--->", newValue, "input name-->", inputName);

    // if (inputName === "fName") setFullName({ fName: newValue });
    // else if (inputName === "lName") setFullName({ lName: newValue });

    setFullName((prevValue) => {
      console.log(prevValue);

      // if (inputName === "fName") {
      if (name === "fName") {
        return {
          // fName: newValue,
          fName: value,
          lName: prevValue.lName,
        };
        // } else if (inputName === "lName") {
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          // lName: newValue,
          lName: value,
        };
      }
    });
  }
  function handleClick(event) {
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form onSubmit={handleClick}>
        <input
          // onChange={handleFname}
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          // onChange={handleLname}
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
