// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDixbBig0D5vqlva8N8rs-_Z6dQnZClOaU",
  authDomain: "react-facebook-clone-b334c.firebaseapp.com",
  projectId: "react-facebook-clone-b334c",
  storageBucket: "react-facebook-clone-b334c.appspot.com",
  messagingSenderId: "433228481757",
  appId: "1:433228481757:web:6ca5f2f6f7a8ec42d60734"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = app.firestore()
const storage = firebase.storage()

export {db, storage}