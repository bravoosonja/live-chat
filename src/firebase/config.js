import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbS2GOr8P0EI4OiSsvgNzVejzM__TXyx0",
  authDomain: "vue-firebase-4dc0a.firebaseapp.com",
  projectId: "vue-firebase-4dc0a",
  storageBucket: "vue-firebase-4dc0a.appspot.com",
  messagingSenderId: "801112360572",
  appId: "1:801112360572:web:76f46850423bce39686bf9",
};

// init firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
