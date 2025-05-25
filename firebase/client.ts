import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBcHBWtxmh9T8gvcoDSy5vHASzHzs5iHJI",
  authDomain: "shrut-koe.firebaseapp.com",
  projectId: "shrut-koe",
  storageBucket: "shrut-koe.firebasestorage.app",
  messagingSenderId: "973162581875",
  appId: "1:973162581875:web:7ae45049f573ab22d07f06",
  measurementId: "G-MK46PLXSD7"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);