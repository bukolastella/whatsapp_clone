import React from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import classes from "./ChatSearchHeader.module.css";

const ChatSearchHeader = () => {
  const dispatch = useDispatch();
  const showHandler = () => {
    dispatch(uiActions.closeSlide());
  };
  return (
    <div className={classes.ChatSearchHeader}>
      <i className="fas fa-times" onClick={showHandler}></i>
      <span>Search Messages</span>
    </div>
  );
};

export default ChatSearchHeader;
