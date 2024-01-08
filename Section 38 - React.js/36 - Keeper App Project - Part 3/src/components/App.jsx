import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  var [noteList, setNoteList] = useState([]);

  function addClick(newItem) {
    setNoteList((prevNotes) => [...prevNotes, newItem]);
  }

  function deleteClick(deleteID) {
    setNoteList((prevNotes) => {
      return prevNotes.filter((value, index) => deleteID !== index);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addClickFunc={addClick} />
      {noteList.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            addDeleteFunc={deleteClick}
            title={note.title}
            content={note.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
