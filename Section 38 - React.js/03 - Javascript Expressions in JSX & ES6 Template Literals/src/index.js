import React from "react";
import ReactDOM from "react-dom";

const fName = "Joshua";
const lName = "Dierickse";
const number = Math.floor(Math.random() * 100);

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}!
    </h1>
    <h2>Your lucky number is {number}!</h2>
  </div>,

  document.getElementById("root")
);
