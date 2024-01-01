import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "blue",
  fontSize: "20px",
  border: "1px solid black",
  borderRadius: "5px",
};

customStyle.color = "red";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
