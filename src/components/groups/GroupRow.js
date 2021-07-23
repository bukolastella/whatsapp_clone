import classes from "./GroupRow.module.css";
import React from "react";
import img from "../../assets/11.png";
import { useDispatch, useSelector } from "react-redux";
import { dataAction } from "../../store/data-slice";

const GroupRow = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.data.groupLastMess);
  console.log(state);
  const groupFetch = () => {
    dispatch(dataAction.changeGroupTitle(props.groupTitle));
    dispatch(dataAction.groupOpen(true));
  };

  return (
    <div className={classes.GroupRow} onClick={groupFetch}>
      <span className={classes.GroupRowImg}>
        <img src={img} alt="group" />
      </span>
      <div className={classes.GroupRowTitle}>{props.groupTitle}</div>
      <span className={classes.GroupRowTime}>{state.time}</span>
      <div className={classes.GroupRowNo}>
        <span>{`${state.username}:`}</span>
        <span> {`${state.message}`}</span>
      </div>
      <span className={classes.GroupRowArrow}>
        <i className="fas fa-angle-down"></i>
      </span>
    </div>
  );
};

export default GroupRow;
