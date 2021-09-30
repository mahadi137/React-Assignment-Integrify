import React from "react";

//Custom CSS
import "../Card/card.css";

export const Entry = (props) => (
  <div className="Entry">
    <h3>{props.fullName}</h3>
    <p>@{props.userName}</p>
    <p>http://{props.webpage}</p>
  </div>
);
