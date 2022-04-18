// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5CJOLxjFpTVSUm-KB1bFl056_4-YCgD4",
  authDomain: "fir-auth-78fa9.firebaseapp.com",
  projectId: "fir-auth-78fa9",
  storageBucket: "fir-auth-78fa9.appspot.com",
  messagingSenderId: "152991603349",
  appId: "1:152991603349:web:3119dba4c1f1d6004cd99c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase

export const auth = getAuth(app);
export default app;
