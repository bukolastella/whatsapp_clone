import React from "react";
import classes from "./Error.module.css";
const Error = (props) => {
  const cancelHandler = () => {
    props.cancel(false);
  };
  return (
    <div className={classes.error}>
      {props.children}
      <span onClick={cancelHandler}>x</span>
    </div>
  );
};

export default Error;
