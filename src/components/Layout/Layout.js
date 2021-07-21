import React from "react";
import { useSelector } from "react-redux";
import { HashRouter, Route, Switch } from "react-router-dom";
import useResize from "../../hooks/use-resize";
import ChatSearch from "../chat search/ChatSearch";
import Group from "../groups/Group";
import Message from "../messages/Message";
import classes from "./Layout.module.css";

const Layout = () => {
  const showState = useSelector((state) => state.ui.open);
  const { resizeState } = useResize();
  return (
    <div
      className={classes.Layout}
      style={{
        gridTemplateColumns:
          showState && resizeState > 1041 && 700 < resizeState
            ? "1fr 1fr 1fr"
            : null,
      }}
    >
      <div className={classes.Group}>
        <Group />
      </div>
      <div
        className={classes.Message}
        style={{
          display:
            showState && resizeState < 1041 && 700 < resizeState
              ? "none"
              : null,
        }}
      >
        <Message />
      </div>
      <div
        className={classes.ChatSearch}
        style={{
          display: showState && 700 < resizeState ? "block" : null,
        }}
      >
        <ChatSearch />
      </div>
      {resizeState < 701 && (
        <HashRouter basename="/">
          <Switch>
            <Route path="/" exact>
              <Group />
            </Route>
            <Route path="/M" exact>
              {!showState && <Message />}
              {showState && <ChatSearch />}
            </Route>
          </Switch>
        </HashRouter>
      )}
    </div>
  );
};

export default Layout;
