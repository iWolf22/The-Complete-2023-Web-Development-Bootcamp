import React from "react";

function Gen(props) {
  return (
    <div className="card">
      <div className="top">
        <h2>{props.name}</h2>
        <img src={props.imgURL} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p>{props.phone}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
}

export default Gen;
