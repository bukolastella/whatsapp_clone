import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import classes from "./Search.module.css";
import Spinner from "../ui/Spinner";

const Search = (props) => {
  const [state, setstate] = useState("");
  const searchTabOpen = useSelector((state) => state.ui.open);
  useEffect(() => {
    if (!searchTabOpen) {
      setstate("");
    }
  }, [searchTabOpen]);
  const submitHandler = (event) => {
    event.preventDefault();
    if (state.trim().length === 0) return setstate("");
    props.onSearch(state);
  };
  return (
    <div className={classes.Search}>
      <form className={classes.SearchForm} onSubmit={submitHandler}>
        <span>
          <i className="fas fa-search"></i>
        </span>
        <input
          type="text"
          placeholder="Search for usernames"
          value={state}
          onChange={(event) => setstate(event.target.value)}
        />
        <span>{props.loading ? <Spinner /> : ""}</span>
      </form>
    </div>
  );
};

export default Search;
