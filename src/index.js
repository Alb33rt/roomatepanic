// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import ReactDOM from 'react-dom/client'
import App from './App'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqT1OuuePcHDYud1US7_h0URerYI5s3s0",
  authDomain: "roommatepanic.firebaseapp.com",
  projectId: "roommatepanic",
  storageBucket: "roommatepanic.appspot.com",
  messagingSenderId: "54731114623",
  appId: "1:54731114623:web:eb96deafcdb9b4f87e974a"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)