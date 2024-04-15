// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxv_TYdRo_oGHe6YB-2tehLODkBxheUJE",
  authDomain: "nextjs-rentease.firebaseapp.com",
  projectId: "nextjs-rentease",
  storageBucket: "nextjs-rentease.appspot.com",
  messagingSenderId: "123890194207",
  appId: "1:123890194207:web:b72426d778b93bb03fc22a",
  measurementId: "G-XDV81GK0ME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app);