import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.inputKey} type="text" value={props.inputText} />
      <button onClick={props.inputClick}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
