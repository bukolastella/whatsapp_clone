import React from "react";
import classes from "./MessageFooter.module.css";

const MessageFooter = () => {
  return (
    <div className={classes.MessageFooter}>
      <form>
        <input type="text" placeholder="Type a message" />
        <button>
          <i className="fas fa-chevron-right"></i>
        </button>
      </form>
    </div>
  );
};

export default MessageFooter;
