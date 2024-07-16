import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCqKHsjv6A0C6-DfbhM5r51EsqdprXI4g4",
    authDomain: "snsap-33745.firebaseapp.com",
    projectId: "snsap-33745",
    storageBucket: "snsap-33745.appspot.com",
    messagingSenderId: "1074828126463",
    appId: "1:1074828126463:web:8bd1cdade2f990673c84ca",
    measurementId: "G-44R5L5DL6J"
  });
}

export default firebase;