import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
//your config
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export {firebaseAuth,firebaseDb}
 
