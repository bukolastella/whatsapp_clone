import React from "react";
import classes from "./MessageHeader.module.css";
import img from "../../assets/11.png";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const MessageHeader = () => {
  const dispatch = useDispatch();
  const showHandler = () => {
    dispatch(uiActions.openSlide());
  };
  return (
    <div className={classes.MessageHeader}>
      <span>
        <i
          className="fas fa-arrow-left"
          onClick={() => window.history.back()}
        ></i>
      </span>
      <div className={classes.GroupRow}>
        <span className={classes.GroupRowImg}>
          <img src={img} alt="group" />
        </span>
        <div className={classes.GroupRowTitle}>Array of hope dsddeddefrre</div>
        <span className={classes.GroupRowTime}>10:45pm</span>
        <div className={classes.GroupRowNo}>
          <span>+234345678956: Alrightss than kjjjuiu</span>
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
