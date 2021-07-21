import React from "react";
import classes from "./Search.module.css";

const Search = () => {
  return (
    <div className={classes.Search}>
      <form className={classes.SearchForm}>
        <span>
          <i className="fas fa-search"></i>
        </span>
        <input type="text" placeholder="Search chat" />
        <span>2</span>
      </form>
    </div>
  );
};

export default Search;
