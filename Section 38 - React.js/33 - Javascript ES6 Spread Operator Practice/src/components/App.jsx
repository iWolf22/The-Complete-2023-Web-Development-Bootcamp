import React, { useState } from "react";

function createListItem(item) {
  return <li>{item}</li>;
}

function App() {
  var [inputValue, setInputValue] = useState("");
  var [toDoList, setToDoList] = useState(["1", "2", "3"]);

  function inputOnChange(event) {
    var value = event.target.value;
    setInputValue(value);
  }

  function buttonOnClick() {
    setInputValue("");
    setToDoList([...toDoList, inputValue]);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={inputOnChange} value={inputValue} type="text" />
        <button onClick={buttonOnClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{toDoList.map(createListItem)}</ul>
      </div>
    </div>
  );
}

export default App;
