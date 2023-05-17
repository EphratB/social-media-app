// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN0NFVQoFXzpppAP4XURJXhFm5_D0fQ14",
  authDomain: "socialmediaapp-54422.firebaseapp.com",
  projectId: "socialmediaapp-54422",
  storageBucket: "socialmediaapp-54422.appspot.com",
  messagingSenderId: "106536178543",
  appId: "1:106536178543:web:ac2ceab046f823b595ce9a",
  measurementId: "G-8G10NCCD38",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
