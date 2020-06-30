import firebase from 'firebase/app';
import 'firebase/firebase-firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA-WXJszG8KW1NO8IALvEc8OhPwaf_Vd9g",
    authDomain: "rickinstagram-9cd26.firebaseapp.com",
    databaseURL: "https://rickinstagram-9cd26.firebaseio.com",
    projectId: "rickinstagram-9cd26",
    storageBucket: "rickinstagram-9cd26.appspot.com",
    messagingSenderId: "406284896955",
    appId: "1:406284896955:web:fd0c2fd9f3c6b3b9f2f79e"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const database = firebase.firestore();