import React from "react";
import ChatSearchHeader from "./ChatSearchHeader";
import Search from "../groups/Search";
import ChatSearchResult from "./ChatSearchResult";
import classes from "./ChatSearch.module.css";

const ChatSearch = () => {
  return (
    <div className={classes.ChatSearch}>
      <ChatSearchHeader />
      <Search />
      <ChatSearchResult />
    </div>
  );
};

export default ChatSearch;
