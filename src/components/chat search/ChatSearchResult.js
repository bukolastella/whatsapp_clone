import React from "react";
import classes from "./ChatSearchResult.module.css";
const ChatSearchResult = (props) => {
  return (
    <div className={classes.ChatSearchResult}>
      <span>{props.data.username}</span>
      <span>{props.data.message}</span>
    </div>
  );
};

export default ChatSearchResult;
