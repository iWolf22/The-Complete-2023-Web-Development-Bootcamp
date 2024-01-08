import React, { useState } from "react";

function CreateArea(props) {
  var [text, setText] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;

    setText((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={text.title}
        />
        <textarea
          name="content"
          value={text.content}
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            props.addClickFunc(text);
            setText({ title: "", content: "" });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
