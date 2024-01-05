import React, { useState } from "react";

function App() {
  var [headingText, setHeadingText] = useState("Hello");

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleOver() {
    document.querySelectorAll("button")[0].style.backgroundColor = "black";
  }

  function handleOut() {
    document.querySelectorAll("button")[0].style.backgroundColor = "white";
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={handleOver}
        onMouseOut={handleOut}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
