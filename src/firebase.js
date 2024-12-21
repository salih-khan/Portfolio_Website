// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg0FN8XJNZljjcjEAz849jXdLqjO9ep10",
  authDomain: "myportfolio-d4e69.firebaseapp.com",
  projectId: "myportfolio-d4e69",
  storageBucket: "myportfolio-d4e69.firebasestorage.app",
  messagingSenderId: "828092765779",
  appId: "1:828092765779:web:8219cbcd41f921720218a6",
  measurementId: "G-NR6GYX15FX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);