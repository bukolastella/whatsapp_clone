import React from "react";
import SpeechBubble from "./SpeechBubble";
import classes from "./MessageGroup.module.css";

const MessageGroup = (props) => {
  const today = new Date().toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const reveal = props.data.map((ev) => (
    <SpeechBubble sent={ev.sent} key={ev.id} data={ev} />
  ));
  return (
    <>
      <div className={classes.MessageAreaDiv}>
        <span>{props.date === today ? "Today" : props.date}</span>
      </div>
      {reveal}
    </>
  );
};

export default MessageGroup;
