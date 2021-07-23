import React from "react";
import ChatSearchHeader from "./ChatSearchHeader";
import Search from "../groups/Search";
import ChatSearchResult from "./ChatSearchResult";
import classes from "./ChatSearch.module.css";
import { useState } from "react";
import { useEffect } from "react";
import db from "../../firebase/firebase";
import { useSelector } from "react-redux";

const ChatSearch = () => {
  const groupTitle = useSelector((state) => state.data.groupTitle);
  const searchTabOpen = useSelector((state) => state.ui.open);
  const [state, setstate] = useState("");
  const [searchData, setSearchData] = useState("");
  const [loading, setLoading] = useState(false);

  const searchHandler = (word) => {
    setstate(word);
  };
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const response = db.collection(groupTitle).where("username", "==", state);
      const data = await response.get();
      if (data.docs.length === 0) {
        setSearchData("");
      } else setSearchData(data.docs);
      setLoading(false);
    };
    fetch();
  }, [groupTitle, state]);
  useEffect(() => {
    if (!searchTabOpen) {
      setSearchData("");
    }
  }, [searchTabOpen]);
  return (
    <div className={classes.ChatSearch}>
      <ChatSearchHeader />
      <Search onSearch={searchHandler} loading={loading} />
      <div className={classes.ChatOverflow}>
        {searchData &&
          searchData.map((ev, i) => (
            <ChatSearchResult key={i} data={ev.data()} />
          ))}
        {!searchData && (
          <p className={classes.ChatP}>Search Usernames like admin,test etc</p>
        )}
      </div>
    </div>
  );
};

export default ChatSearch;
