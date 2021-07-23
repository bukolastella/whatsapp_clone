import Layout from "./components/Layout/Layout";
import classes from "./App.module.css";
import Auth from "./components/auth/Auth";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "./store/ui-slice";

function App() {
  //getting the time left if you leave
  const [state] = useState(localStorage.getItem("deadLine"));
  const [username] = useState(localStorage.getItem("username"));
  const isLoggin = useSelector((state) => state.ui.login);
  const dispatch = useDispatch();
  useEffect(() => {
    if (state) {
      dispatch(uiActions.isLoggin(true));
      dispatch(uiActions.setUsername(username));
      let time = state - Date.now();
      if (time < 6000) time = 0;
      setTimeout(() => {
        localStorage.removeItem("deadLine");
        localStorage.removeItem("username");
        dispatch(uiActions.isLoggin(false));
        dispatch(uiActions.setUsername(""));
      }, time);
    }
  }, [state, dispatch, username]);
  return (
    <div className={classes.App}>
      {isLoggin && <Layout />}
      {!isLoggin && <Auth />}
    </div>
  );
}

export default App;
