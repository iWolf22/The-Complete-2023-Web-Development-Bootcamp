import React, { useState } from "react";

function App() {
  var [firstName, setFirstName] = useState("");
  var [lastName, setLastName] = useState("");

  function inputChange(event, inputBox) {
    console.log(event.target.value, inputBox);
    if (inputBox === "fName") {
      setFirstName(event.target.value);
    } else {
      setLastName(event.target.value);
    }
  }

  return (
    <div className="container">
      <h1>
        Hello {firstName} {lastName}
      </h1>
      <form>
        <input
          onChange={(event) => inputChange(event, "fName")}
          name="fName"
          placeholder="First Name"
          value={firstName}
        />
        <input
          onChange={(event) => inputChange(event, "lName")}
          name="lName"
          placeholder="Last Name"
          value={lastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
