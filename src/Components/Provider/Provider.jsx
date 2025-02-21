// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGwO2JV-iHfjzTpr3XDu0P8baAHYFerHE",
  authDomain: "gymattendance-bbda6.firebaseapp.com",
  projectId: "gymattendance-bbda6",
  storageBucket: "gymattendance-bbda6.firebasestorage.app",
  messagingSenderId: "1070727996618",
  appId: "1:1070727996618:web:6088f3142eca45b0808033"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);