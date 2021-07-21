import React from "react";
import GroupRow from "./GroupRow";
import classes from "./Group.module.css";
import Search from "./Search";
import GroupHeader from "./GroupHeader";

const Group = () => {
  return (
    <div>
      <GroupHeader />
      <Search />
      <div className={classes.GroupRow}>
        <GroupRow />
        <GroupRow />
        <GroupRow />
        <GroupRow />
        {/* <GroupRow />
        <GroupRow />
        <GroupRow />
        <GroupRow />
        <GroupRow /> */}
      </div>
    </div>
  );
};

export default Group;
