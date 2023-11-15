// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAEb8GJlZbNZmcsrWHqFZu640gq-pXTnsY",
    authDomain: "instagram-clone-b09ea.firebaseapp.com",
    databaseURL: "https://instagram-clone-b09ea-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-b09ea",
    storageBucket: "instagram-clone-b09ea.appspot.com",
    messagingSenderId: "555567845120",
    appId: "1:555567845120:web:d7506a59f982f03c5f6de5",
    measurementId: "G-3J57ZV7JB7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
