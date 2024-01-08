import React, { useState } from "react";

function ListItem(props) {
  // var [styling, setStyling] = useState({ textDecoration: "none" });

  function listOnClick() {
    // if (styling.textDecoration === "line-through") {
    //   setStyling({ textDecoration: "none" });
    // } else {
    //   setStyling({ textDecoration: "line-through" });
    // }
    props.onChecked(props.id);
  }

  return <li onClick={listOnClick}>{props.todoItem}</li>;
}

export default ListItem;
