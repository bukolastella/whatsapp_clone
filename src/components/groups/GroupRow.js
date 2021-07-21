import classes from "./GroupRow.module.css";
import React from "react";
import img from "../../assets/11.png";
import { Link } from "react-router-dom";

const GroupRow = () => {
  return (
    <Link className={classes.GroupRow} to="/M">
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
    </Link>
  );
};

export default GroupRow;
