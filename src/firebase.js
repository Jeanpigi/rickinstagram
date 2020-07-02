import firebase from "firebase/app";
import "firebase/firebase-firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "APIKEY",
  authDomain: "AUTHDOMAIN",
  databaseURL: "DATABASE_URL",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGEBUCKET",
  messagingSenderId: "MESSAGINSENDER_ID",
  appId: "APPID",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const database = firebase.firestore();
