import React, { useState } from "react";

function ToDoItem(props) {
  //   const [isDone, setIsDone] = useState(false);

  //   function handleClick() {
  //     // setIsDone((prev) => !prev);
  //     console.log("clicked");
  //   }

  return (
    <li
      //   onClick={handleClick}
      //   onClick={props.onChecked} //triggerinng deleteItem() from App.jsx

      onClick={() => {
        props.onChecked(props.id); //funcion will only be called when onclick triggered
      }}

      //   style={{ textDecoration: isDone ? "line-through" : "none" }}
    >
      {props.item}
    </li>
  );
}

export default ToDoItem;
