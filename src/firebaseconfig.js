// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABELKeQip2kQp5JAs3qDSSh3oaUyujkV0",
  authDomain: "user-authentication-37800.firebaseapp.com",
  projectId: "user-authentication-37800",
  storageBucket: "user-authentication-37800.firebasestorage.app",
  messagingSenderId: "572081577653",
  appId: "1:572081577653:web:e98ac00bba391fafa2a8fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
