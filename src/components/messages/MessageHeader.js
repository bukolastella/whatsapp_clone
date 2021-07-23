import React from "react";
import classes from "./MessageHeader.module.css";
import img from "../../assets/11.png";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { dataAction } from "../../store/data-slice";

const MessageHeader = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.data.groupTitle);
  const groupLastMess = useSelector((state) => state.data.groupLastMess);

  const showHandler = () => {
    dispatch(uiActions.openSlide());
  };
  return (
    <div className={classes.MessageHeader}>
      <span>
        <i
          className="fas fa-arrow-left"
          onClick={() => dispatch(dataAction.groupOpen(false))}
        ></i>
      </span>
      <div className={classes.GroupRow}>
        <span className={classes.GroupRowImg}>
          <img src={img} alt="group" />
        </span>
        <div className={classes.GroupRowTitle}>{state}</div>
        <span className={classes.GroupRowTime}>{groupLastMess.time}</span>
        <div className={classes.GroupRowNo}>
          <span>{`${groupLastMess.username}:`}</span>
          <span> {`${groupLastMess.message}`}</span>
        </div>
        <span className={classes.GroupRowArrow}>
          <i className="fas fa-angle-down"></i>
        </span>
      </div>
      <span onClick={showHandler}>
        <i className="fas fa-search"></i>
      </span>
    </div>
  );
};

export default MessageHeader;
