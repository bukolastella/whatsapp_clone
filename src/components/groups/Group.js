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
        <GroupRow groupTitle={"Programming Jokes"} />
        <GroupRow groupTitle={"Array of Hope"} />
        <GroupRow groupTitle={"Controversial Opinions"} />
      </div>
    </div>
  );
};

export default Group;
