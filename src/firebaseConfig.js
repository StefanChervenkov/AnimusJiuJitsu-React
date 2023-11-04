// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9WCPD4fvWgF6x1wmbF3zeUnZZUQYpvwk",
  authDomain: "animusjiujitsu.firebaseapp.com",
  projectId: "animusjiujitsu",
  storageBucket: "animusjiujitsu.appspot.com",
  messagingSenderId: "725756451732",
  appId: "1:725756451732:web:94f3516325c4aae09d4d81",
  measurementId: "G-B8P54WHVJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);