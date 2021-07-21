import React from "react";
import MessageArea from "./MessageArea";
import MessageFooter from "./MessageFooter";
import MessageHeader from "./MessageHeader";
import classes from "./Message.module.css";

const Message = () => {
  return (
    <div className={classes.Message}>
      <MessageHeader />
      <MessageArea />
      <MessageFooter />
    </div>
  );
};

export default Message;
