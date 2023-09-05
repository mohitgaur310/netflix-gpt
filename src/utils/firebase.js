// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrbTeIpyS4gaQvW53tZytf-Q1VsdfNxlo",
  authDomain: "netflixgpt-netflix.firebaseapp.com",
  projectId: "netflixgpt-netflix",
  storageBucket: "netflixgpt-netflix.appspot.com",
  messagingSenderId: "592542748104",
  appId: "1:592542748104:web:74fef844ad2c818dda84fd",
  measurementId: "G-35CWKGBN4J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();