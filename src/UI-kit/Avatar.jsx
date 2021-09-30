import React from "react";

//Custom CSS
import "../Card/card.css";

export function Avatar(props) {
  return (
    <div className="Avatar">
      <h1>{props.avatarName}</h1>
    </div>
  );
}
