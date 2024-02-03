// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCM3Mn8vNaVKeSMTkOR9T2-60JCUgaQAgo",
  authDomain: "manage-accounts-c907b.firebaseapp.com",
  projectId: "manage-accounts-c907b",
  storageBucket: "manage-accounts-c907b.appspot.com",
  messagingSenderId: "37678589450",
  appId: "1:37678589450:web:0963d2c66fd7fd2c2861f3",
  measurementId: "G-3W3VZ4B4GN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export let auth=getAuth()

