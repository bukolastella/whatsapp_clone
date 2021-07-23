import React from "react";
import classes from "./SpeechBubble.module.css";

const SpeechBubble = (props) => {
  const k = props.sent ? classes.SpeechSent : classes.SpeechReceived;
  return (
    <div className={k}>
      <div
        className={classes.SpeechBubbleGrid}
        style={{
          gridTemplateRows: props.sent ? "1fr" : null,
          backgroundColor: props.sent ? null : "#262d31",
        }}
      >
        <span
          style={{
            display: props.sent ? "none" : null,
          }}
        >
          {props.data.username}
        </span>
        <div>{props.data.message}</div>
        <span className={classes.SpeechBubbleTime}>{props.data.time}</span>
      </div>
    </div>
  );
};

export default SpeechBubble;
