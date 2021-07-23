import classes from "./Auth.module.css";
import { useState } from "react";
import Error from "../ui/Error";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import db from "../../firebase/firebase";
import Loader from "../ui/Loader";

const Auth = () => {
  const loading = useSelector((state) => state.ui.loading);
  const [signupState, setSignupState] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredUsername, setEnteredUsername] = useState("");
  const [error, setError] = useState(false);
  const [errorMess, setErrorMess] = useState(false);
  const dispatch = useDispatch();
  const submitHandler = (event) => {
    event.preventDefault();
    //form validation
    if (
      enteredEmail.trim().length === 0 &&
      enteredPassword.trim().length === 0 &&
      enteredUsername.trim().length === 0
    )
      setError(true);

    if (enteredEmail.trim().length === 0) {
      setEnteredEmail(" ");
      return;
    }

    if (enteredPassword.trim().length === 0) {
      setEnteredPassword(" ");
      return;
    }

    if (signupState && enteredUsername.trim().length === 0) {
      setEnteredUsername(" ");
      return;
    }

    const fetchData = async () => {
      dispatch(uiActions.setLoading(true));
      let url;
      if (signupState)
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_API_KEY}`;
      else
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`;
      //auth
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (!response.ok) {
        setErrorMess(data.error.message);
        setTimeout(() => {
          if (!errorMess) {
            setErrorMess(false);
          }
        }, 3000);
        return;
      }
      //set username for sign up
      if (signupState) {
        db.collection("Users").add({
          email: enteredEmail,
          name: enteredUsername,
        });
        dispatch(uiActions.setUsername(enteredUsername));
        localStorage.setItem("username", enteredUsername);
      }
      //get the user name for login
      if (!signupState) {
        const userResponse = db
          .collection("Users")
          .where("email", "==", `${data.email}`);
        const responseData = await userResponse.get();
        responseData.docs.forEach((doc) => {
          dispatch(uiActions.setUsername(doc.data().name));
          localStorage.setItem("username", doc.data().name);
        });
      }

      //set expiration time for Auth
      const expirationTime = Date.now() + data.expiresIn * 1000;
      localStorage.setItem("deadLine", expirationTime);
      const remainingTime = expirationTime - Date.now();
      setTimeout(() => {
        localStorage.removeItem("deadLine");
        localStorage.removeItem("username");
        dispatch(uiActions.isLoggin(false));
      }, remainingTime);
      dispatch(uiActions.isLoggin(true));
    };
    fetchData().catch((error) => setErrorMess(error.message));
  };

  return (
    <div className={classes.Auth}>
      {errorMess && <Error cancel={setErrorMess}>{errorMess}</Error>}
      {loading && (
        <div className={classes.Loader}>
          <Loader />
        </div>
      )}
      {!loading && (
        <form className={classes.AuthForm} onSubmit={submitHandler}>
          <div className={classes.AuthHeader}>
            <h1>ChatClone</h1>
            <span
              style={{
                textDecoration: signupState ? null : "underline",
                color: signupState ? null : "white",
              }}
              onClick={() => {
                setSignupState(false);
                setError(false);
                setEnteredUsername("");
                setEnteredPassword("");
                setEnteredEmail("");
              }}
            >
              Sign in
            </span>
            <span
              style={{
                textDecoration: signupState ? "underline" : null,
                color: signupState ? "white" : null,
              }}
              onClick={() => {
                setSignupState(true);
                setError(false);
                setEnteredUsername("");
                setEnteredPassword("");
                setEnteredEmail("");
              }}
            >
              Sign up
            </span>
          </div>

          {signupState && (
            <div className={classes.AuthDiv}>
              <span>Username</span>
              <span
                style={{
                  display: error ? "block" : null,
                }}
              >
                kindly provide a username
              </span>
              <input
                type="text"
                placeholder="mary jane"
                //   required
                value={enteredUsername}
                onChange={(event) => setEnteredUsername(event.target.value)}
              />
            </div>
          )}
          <div className={classes.AuthDiv}>
            <span>Email</span>
            <span
              style={{
                display: error ? "block" : null,
              }}
            >
              Email field cannot be empty
            </span>
            <input
              type="email"
              placeholder="test@test.com"
              // required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={classes.AuthDiv}>
            <span>Password</span>
            <span
              style={{
                display: error ? "block" : null,
              }}
            >
              Password cannot be empty
            </span>
            <input
              type="password"
              placeholder="6 or more characters"
              minLength="6"
              size="8"
              value={enteredPassword}
              onChange={(event) => setEnteredPassword(event.target.value)}
            />
          </div>
          <button className={classes.AuthBtn}>
            {signupState ? "let me in!" : "login"}
          </button>
          <button className={classes.AuthBtn2}>sign in anonymously</button>
        </form>
      )}
    </div>
  );
};

export default Auth;
