import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqT1OuuePcHDYud1US7_h0URerYI5s3s0",
  authDomain: "roommatepanic.firebaseapp.com",
  projectId: "roommatepanic",
  storageBucket: "roommatepanic.appspot.com",
  messagingSenderId: "54731114623",
  appId: "1:54731114623:web:eb96deafcdb9b4f87e974a"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);

export const provider = new GoogleAuthProvider();

auth.onAuthStateChanged((user) => {
    if (user) {
        localStorage.setItem('username', user.displayName)
    } else {
        localStorage.removeItem('username');
    }
});