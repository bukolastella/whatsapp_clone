import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import classes from "./SpeechBubble.module.css";

//
const SpeechBubble = (props) => {
  const dispatch = useDispatch();
  const deleteState = useSelector((state) => state.ui.delete);
  const k = props.sent ? classes.SpeechSent : classes.SpeechReceived;

  const clickHandler = () => {
    if (props.sent) {
      dispatch(uiActions.setDelete());
      dispatch(uiActions.setDeleteId(props.data.dataId));
    }
  };
  // const r = {
  //   gridTemplateRows: props.sent ? "1fr" : null,
  //   backgroundColor: props.sent ? null : "#262d31",
  // };
  let r;
  if (!props.state && props.sent) {
    //A sent message from the user
    r = {
      gridTemplateRows: "1fr",
      backgroundColor: "#056162",
    };
  } else if (props.state && deleteState && props.sent) {
    //A sent message from the user that has been clicked on
    r = {
      gridTemplateRows: "1fr",
      color: "red",
    };
  } else if (props.state && !deleteState && props.sent) {
    //A sent message from the user that has been clicked on
    r = {
      gridTemplateRows: "1fr",
      color: "white",
    };
  } else {
    //A sent message from other users
    r = { gridTemplateRows: "1fr", backgroundColor: "#262d31" };
  }
  return (
    <div className={k} onClick={clickHandler} style={r}>
      <div className={classes.SpeechBubbleGrid} style={r}>
        <span
          style={{
            display: props.sent ? "none" : null,
          }}
        >
          {props.data.username}
        </span>
        <div
          style={{
            color:
              props.data.message === "This message was deleted" ? "gray" : null,
          }}
        >
          {props.data.message}
        </div>
        <span className={classes.SpeechBubbleTime}>{props.data.time}</span>
      </div>
    </div>
  );
};

export default SpeechBubble;
