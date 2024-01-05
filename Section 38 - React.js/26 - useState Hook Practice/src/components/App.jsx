import React, { useState } from "react";

function App() {
  setInterval(clickGetTime, 1000);

  var [time, setTime] = useState(new Date().toString());

  function clickGetTime() {
    setTime(new Date().toString());
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={clickGetTime}>Get Time</button>
    </div>
  );
}

export default App;
