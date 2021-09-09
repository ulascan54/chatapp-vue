import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBOVuO_wNIpmz5piB0ALG7TYvjgLJJIwEU",
  authDomain: "screetchat-fa3a8.firebaseapp.com",
  projectId: "screetchat-fa3a8",
  storageBucket: "screetchat-fa3a8.appspot.com",
  messagingSenderId: "636746985150",
  appId: "1:636746985150:web:990cb5dd4737badcc378ef",
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export {firebaseAuth,firebaseDb}
 