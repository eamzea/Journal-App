import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXc8D87JzfHt2MOGEW_im1u0qq8JyNeh4",
  authDomain: "journalappreact.firebaseapp.com",
  databaseURL: "https://journalappreact.firebaseio.com",
  projectId: "journalappreact",
  storageBucket: "journalappreact.appspot.com",
  messagingSenderId: "1017990036855",
  appId: "1:1017990036855:web:eb653b5c2b6613063b7572",
  measurementId: "G-E1RRMVM56V",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
