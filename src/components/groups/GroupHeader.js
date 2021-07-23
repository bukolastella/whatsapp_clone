import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import classes from "./GroupHeader.module.css";

const GroupHeader = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.ui.username);
  return (
    <div className={classes.GroupHeader}>
      <span>
        <i className="fas fa-user fa-2x"></i>
        <div>
          <span>Username :</span>
          <span>{state}</span>
        </div>
      </span>
      <div
        className={classes.GroupFlex}
        onClick={() => {
          localStorage.removeItem("deadLine");
          localStorage.removeItem("username");
          dispatch(uiActions.isLoggin(false));
          dispatch(uiActions.setUsername(""));
          window.location.reload();
        }}
      >
        Logout
      </div>
    </div>
  );
};

export default GroupHeader;
