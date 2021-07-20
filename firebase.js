import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDp_54ro9tS-iSYeGnGUGrip3ynRIMyCjQ",
  authDomain: "tindog-rn-expo.firebaseapp.com",
  projectId: "tindog-rn-expo",
  storageBucket: "tindog-rn-expo.appspot.com",
  messagingSenderId: "774915883993",
  appId: "1:774915883993:web:548e49e20cda5d4e744fc8"
};

firebase.initializeApp(firebaseConfig);

export default firebase;