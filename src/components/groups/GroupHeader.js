import React from "react";

import classes from "./GroupHeader.module.css";

const GroupHeader = () => {
  return (
    <div className={classes.GroupHeader}>
      <span>
        <i className="fas fa-user fa-2x"></i>
      </span>
      <div className={classes.GroupFlex}>
        <i className="fas fa-circle-notch"></i>
        <i className="fas fa-plus"></i>
        <i className="fas fa-ellipsis-h"></i>
      </div>
    </div>
  );
};

export default GroupHeader;
