import React from "react";
import { Avatar } from "../UI-kit/Avatar";
import { Entry } from "./Entry";

export const Cards = (props) => (
  <div>
    <Avatar avatarName={props.firstChar} />

    <Entry
      fullName={props.fullName}
      userName={props.userName}
      webpage={props.webpage}
    />
  </div>
);
