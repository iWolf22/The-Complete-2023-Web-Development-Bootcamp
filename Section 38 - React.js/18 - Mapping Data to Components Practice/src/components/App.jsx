import React from "react";
import Entry from "./Entry.jsx";
import emojipedia from "./emojipedia.js";

function entryHelper(emoji) {
  return (
    <Entry
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      def={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(entryHelper)}</dl>
    </div>
  );
}

export default App;
