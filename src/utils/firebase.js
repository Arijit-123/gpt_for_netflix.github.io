// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9G3y2lQ_FHz0IAX9ZXAcs_U3DRJ0iuDs",
  authDomain: "netflixgptcomb.firebaseapp.com",
  projectId: "netflixgptcomb",
  storageBucket: "netflixgptcomb.appspot.com",
  messagingSenderId: "454592284842",
  appId: "1:454592284842:web:1eac8fde43332eb10c68d3",
  measurementId: "G-K6LK04PFJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();