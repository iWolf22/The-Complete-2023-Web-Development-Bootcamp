//var React = require("react");
//var ReactDOM = require("react-dom");

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h2>First Line</h2>
    <h3>Second Line</h3>
  </div>,

  document.getElementById("root")
);

var h1 = document.createElement("h1");
h1.innerHTML = "Hello World!";
document.getElementById("root").appendChild(h1);
