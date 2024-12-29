import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    let flag = false;
    if (name === "title") flag = true;
    setNote((prev) => {
      return {
        ...prev,
        [flag ? "title" : "content"]: value,
      };
    });

    console.log(note);
    // console.log(event.target);
  }

  function addNote(event) {
    event.preventDefault();
    props.addNote(note);
    setNote((prev) => {
      return {
        title: "",
        content: "",
      };
    });
  }

  return (
    <div>
      <form onSubmit={addNote}>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={note.content}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
