import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";

//
var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "whatsapp-clone-a8adf.firebaseapp.com",
  projectId: "whatsapp-clone-a8adf",
  storageBucket: "whatsapp-clone-a8adf.appspot.com",
  messagingSenderId: "165536901174",
  appId: "1:165536901174:web:e742a51585d555ba045097",
  measurementId: "G-RJN290JYXG",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
// db.settings({
//   timestampsInSnapshots: true,
// });

export default db;
