import { initializeApp } from 'firebase/app';
import {getDatabase} from 'firebase/database';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyB9WCPD4fvWgF6x1wmbF3zeUnZZUQYpvwk",
    authDomain: "animusjiujitsu.firebaseapp.com",
    projectId: "animusjiujitsu",
    storageBucket: "animusjiujitsu.appspot.com",
    messagingSenderId: "725756451732",
    appId: "1:725756451732:web:94f3516325c4aae09d4d81",
    measurementId: "G-B8P54WHVJY",
    databaseURL: "https://animusjiujitsu-default-rtdb.europe-west1.firebasedatabase.app/"
  };

const app = initializeApp(firebaseConfig);


export const auth = getAuth();
export const database = getDatabase(app);
export default app;