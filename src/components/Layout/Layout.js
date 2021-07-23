import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../../firebase/firebase";
import useResize from "../../hooks/use-resize";
import { dataAction } from "../../store/data-slice";
import { uiActions } from "../../store/ui-slice";
import ChatSearch from "../chat search/ChatSearch";
import Group from "../groups/Group";
import Message from "../messages/Message";
import classes from "./Layout.module.css";

const Layout = () => {
  const dispatch = useDispatch();
  const showState = useSelector((state) => state.ui.open);
  const groupTitle = useSelector((state) => state.data.groupTitle);
  const groupOpen = useSelector((state) => state.data.groupOpen);
  const { resizeState } = useResize();
  //
  useEffect(() => {
    const fetch = async () => {
      dispatch(uiActions.setLoading(true));
      db.collection(groupTitle)
        .orderBy("date")
        .onSnapshot((snapshot) => {
          const dataArray = [];
          snapshot.docs.forEach((doc, i) =>
            dataArray.push({
              ...doc.data(),
              date: doc.data().date.toDate().toLocaleString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              }),
              time: doc.data().date.toDate().toLocaleString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              }),
              id: i,
            })
          ); //
          dispatch(
            dataAction.setGroupLastMess(dataArray[dataArray.length - 1])
          );
          //group by date
          const dateToData = dataArray.reduce((acc, d) => {
            if (Object.keys(acc).includes(d.date)) return acc;
            acc[d.date] = dataArray.filter((g) => g.date === d.date);
            return acc;
          }, {});
          //
          dispatch(dataAction.storeData(dateToData));
        });
    };
    fetch();
    // .catch((err) => console.log(err));
    dispatch(uiActions.setLoading(false));
  }, [dispatch, groupTitle]);

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
      {resizeState > 700 && (
        <>
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
        </>
      )}
      {resizeState < 701 && (
        <>
          {!groupOpen && <Group />}
          {!showState && groupOpen && <Message />}
          {showState && groupOpen && <ChatSearch />}
        </>
      )}
    </div>
  );
};

export default Layout;
