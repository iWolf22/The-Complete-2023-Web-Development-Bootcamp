import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/400/400";

ReactDOM.render(
  <div>
    <h1 class="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
    <div>
      <img
        className="img-style"
        src="https://picsum.photos/100/100"
        alt="lorem pictures"
      />
      <img
        className="img-style"
        src="https://picsum.photos/200/200"
        alt="lorem pictures"
      />
      <img
        className="img-style"
        src="https://picsum.photos/300/300"
        alt="lorem pictures"
      />
      <img
        className="img-style"
        src={img + "?grayscale"}
        alt="lorem pictures"
      />
    </div>
  </div>,
  document.getElementById("root")
);
