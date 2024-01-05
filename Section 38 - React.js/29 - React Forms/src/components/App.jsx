import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [cName, setcName] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function buttonClick() {
    setcName(name);
  }

  function handleClick(event) {
    setcName(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {cName}</h1>
      {/* <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={buttonClick}>Submit</button> */}
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
