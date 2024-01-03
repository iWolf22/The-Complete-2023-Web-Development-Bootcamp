import React from "react";
import contacts from "./contacts";
import parse from "html-react-parser";
import Gen from "./Gen.jsx";

function App() {

  var htmlToReact = "<div><h1 className='heading'>My Contacts</h1>";
  for (let i = 0; i < contacts.length; i++) {
    htmlToReact += `<Gen name=${contacts[i].name} imgUrl=${contacts[i].imgUrl} phone=${contacts[i].phone} email=${contacts[i].email} />`;
  }
  htmlToReact += "<p>Copyright Joshua Dierickse</p></div>";
  htmlToReact = parse(htmlToReact);

  return htmlToReact;
}

export default App;
