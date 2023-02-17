import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function AddNote(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
  function SubmitButton(event) {
    props.onAdd(note);
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={AddNote}
          name="title"
          value={note.title}
          placeholder="Title"
        />
        <textarea
          onChange={AddNote}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={SubmitButton}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
