import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAxOIdIpFnTN3yLXz4Jncd-X5o9KOGuR0s",
  authDomain: "irochat-22b2c.firebaseapp.com",
  databaseURL: "https://irochat-22b2c.firebaseio.com",
  projectId: "irochat-22b2c",
  storageBucket: "irochat-22b2c.appspot.com",
  messagingSenderId: "222448198347",
  appId: "1:222448198347:web:9008aaf2513b8bbc53714e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
