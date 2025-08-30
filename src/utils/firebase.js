// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbJup8biVc2WlkhfsoSsfa4m5x8EXWBuk",
  authDomain: "netflixgpt-c7c19.firebaseapp.com",
  projectId: "netflixgpt-c7c19",
  storageBucket: "netflixgpt-c7c19.firebasestorage.app",
  messagingSenderId: "375735018842",
  appId: "1:375735018842:web:a222578d61b6897082bf63",
  measurementId: "G-E40W719Y6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();