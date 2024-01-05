import React from "react";
import { userIsRegistered } from "./App";

function Form() {
  return (
    <form className="form">
      {userIsRegistered ? (
        <div>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </div>
      ) : (
        <div>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit">Register</button>
        </div>
      )}
    </form>
  );
}

export default Form;
