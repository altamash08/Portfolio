// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// OPTIONAL (can comment if error)
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCTga6b4hcgI1g8_Zlt1CuhGzBKYKHzsJc",
  authDomain: "portfolio-15d80.firebaseapp.com",
  projectId: "portfolio-15d80",
  storageBucket: "portfolio-15d80.firebasestorage.app",
  messagingSenderId: "994520484366",
  appId: "1:994520484366:web:24735c288557d288104a5f",
  measurementId: "G-CEY2WYRC2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Google Login
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, provider);

// Analytics (optional)
export const analytics = getAnalytics(app);

export default app;
