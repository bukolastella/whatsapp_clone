import React from "react";
import SpeechBubble from "./SpeechBubble";
import classes from "./MessageGroup.module.css";
import { useSelector } from "react-redux";

const MessageGroup = (props) => {
  const state = useSelector((state) => state.ui.username);
  const today = new Date().toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const reveal = props.data.map((ev) => (
    <SpeechBubble sent={ev.username === state} key={ev.id} data={ev} />
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
