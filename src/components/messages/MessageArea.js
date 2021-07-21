import React from "react";
import classes from "./MessageArea.module.css";
import SpeechBubble from "./SpeechBubble";

const MessageArea = () => {
  return (
    <div className={classes.MessageArea}>
      <SpeechBubble />
      <SpeechBubble sent />
      <SpeechBubble sent />
      <SpeechBubble sent />
    </div>
  );
};

export default MessageArea;
