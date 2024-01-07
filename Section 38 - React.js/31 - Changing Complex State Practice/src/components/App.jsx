import React, { useState } from "react";

function App() {
  var [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function keyPress(event) {
    var {
      target: { name, value },
    } = event;

    var tempContact = {
      fName: contact.fName,
      lName: contact.lName,
      email: contact.email,
    };
    if (name === "fName") {
      tempContact.fName = value;
    } else if (name === "lName") {
      tempContact.lName = value;
    } else {
      tempContact.email = value;
    }

    setContact(tempContact);
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={keyPress}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={keyPress}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={keyPress}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
