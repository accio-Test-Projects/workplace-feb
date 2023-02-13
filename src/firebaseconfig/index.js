// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU-pBJVI6m1aRvXKd-gQtEGH5EABTMWgI",
  authDomain: "workpace-feb.firebaseapp.com",
  projectId: "workpace-feb",
  storageBucket: "workpace-feb.appspot.com",
  messagingSenderId: "215803986167",
  appId: "1:215803986167:web:76bc247f020759d1df13f2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app);