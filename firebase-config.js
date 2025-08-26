// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQXKQT6zdeOIRkgnH9TFWFGG-0zGfFFbY",
  authDomain: "protfolio-website-2025.firebaseapp.com",
  projectId: "protfolio-website-2025",
  storageBucket: "protfolio-website-2025.firebasestorage.app",
  messagingSenderId: "965933424790",
  appId: "1:965933424790:web:56701b9e1c194abfc162b7",
  measurementId: "G-J4M0JKG6BG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);