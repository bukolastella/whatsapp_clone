import classes from "./GroupRow.module.css";
import React from "react";
import img from "../../assets/11.png";
import { useDispatch, useSelector } from "react-redux";
import { dataAction } from "../../store/data-slice";

const GroupRow = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.data.groupLastMess);
  const groupState = useSelector((state) => state.data.groupTitle);
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
        <span>
          {groupState === props.groupTitle ? `${state.username}: ` : "admin: "}
        </span>
        <span>
          {groupState === props.groupTitle
            ? `${state.message}`
            : "Try clicking this group"}
        </span>
      </div>
      <span className={classes.GroupRowArrow}>
        <i className="fas fa-angle-down"></i>
      </span>
    </div>
  );
};

export default GroupRow;
