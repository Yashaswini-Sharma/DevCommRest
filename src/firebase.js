// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_gn68tdmuKYc-TmBCViPW-Dq04csu3jY",
  authDomain: "base-f0390.firebaseapp.com",
  projectId: "base-f0390",
  storageBucket: "base-f0390.appspot.com",
  messagingSenderId: "1096559669371",
  appId: "1:1096559669371:web:3a9e9559b4b6f84d4e32de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

