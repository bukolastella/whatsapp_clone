import React from "react";
import { useSelector } from "react-redux";
import classes from "./MessageArea.module.css";
import MessageGroup from "./MessageGroup";

const MessageArea = () => {
  const data = useSelector((state) => state.data.data);
  const reveal = [];
  for (const key in data) {
    reveal.push(<MessageGroup date={key} key={key} data={data[key]} />);
  }
  return <div className={classes.MessageArea}>{reveal}</div>;
};

export default MessageArea;
