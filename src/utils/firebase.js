// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAtPqdEfAiYfzfOtX4jRv2jKvbNIjAFPc",
  authDomain: "r-c-t-2311e.firebaseapp.com",
  projectId: "r-c-t-2311e",
  storageBucket: "r-c-t-2311e.appspot.com",
  messagingSenderId: "1059365321825",
  appId: "1:1059365321825:web:fb13e513753c34c4aa3e20",
  measurementId: "G-B1FCTTCVQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();