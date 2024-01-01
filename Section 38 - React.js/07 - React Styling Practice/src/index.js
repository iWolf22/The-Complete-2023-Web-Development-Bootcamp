//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
let hour = date.getHours();

var textColor;
var text;

if (0 <= hour && hour < 12) {
  text = "Good Morning";
  textColor = "red";
} else if (12 <= hour && hour < 6) {
  text = "Good Afternoon";
  textColor = "green";
} else {
  text = "Good Evening";
  textColor = "blue";
}

var color = {
  color: textColor,
};

ReactDOM.render(<h1 style={color}>{text}</h1>, document.getElementById("root"));
