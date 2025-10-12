// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhowUvrRJj_NwoANxrjXnxz4UlKeGnOPk",
  authDomain: "gptnetflix-3efa3.firebaseapp.com",
  projectId: "gptnetflix-3efa3",
  storageBucket: "gptnetflix-3efa3.firebasestorage.app",
  messagingSenderId: "812701061583",
  appId: "1:812701061583:web:340478a82dc69e689d42ba",
  measurementId: "G-T3VLGLC5QC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const auth = getAuth();