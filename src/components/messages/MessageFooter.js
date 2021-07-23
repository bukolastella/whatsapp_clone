import React, { useState } from "react";
import { useSelector } from "react-redux";
import db from "../../firebase/firebase";
import classes from "./MessageFooter.module.css";

const MessageFooter = () => {
  const [state, setstate] = useState("");
  const username = useSelector((state) => state.ui.username);
  const groupTitle = useSelector((state) => state.data.groupTitle);
  const saveDataHandler = (event) => {
    event.preventDefault();
    if (state.trim().length === 0) return setstate(" ");
    console.log("pp");
    db.collection(groupTitle).add({
      date: new Date(),
      sent: true,
      username: username,
      message: state,
    });
  };
  return (
    <div className={classes.MessageFooter}>
      <form onSubmit={saveDataHandler}>
        <input
          type="text"
          placeholder="Type a message"
          value={state}
          onChange={(event) => setstate(event.target.value)}
        />
        <button>
          <i className="fas fa-chevron-right"></i>
        </button>
      </form>
    </div>
  );
};

export default MessageFooter;
