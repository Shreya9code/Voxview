// Import the functions you need from the SDKs you need
import {  getApp, getApps,initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfgWYOKVbSMFmCo83WonA7kBrvwbQA-hQ",
  authDomain: "login-26faa.firebaseapp.com",
  projectId: "login-26faa",
  storageBucket: "login-26faa.firebasestorage.app",
  messagingSenderId: "829899468253",
  appId: "1:829899468253:web:0e456b5adad204ee079a34",

};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);