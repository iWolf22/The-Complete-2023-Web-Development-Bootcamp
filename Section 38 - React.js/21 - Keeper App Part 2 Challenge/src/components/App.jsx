import React from "react";
import Heading from "./Heading.jsx";
import Note from "./Notes.jsx";
import Footer from "./Footer.jsx";
import notes from "./Notes.js";

function App() {
    return (
        <div>
            <Heading />
            {notes.map(note => <Note title={note.title} content={note.content} />)}
            <Footer />
        </div>
    )
}

export default App;