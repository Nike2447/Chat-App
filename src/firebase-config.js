// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClhKDU1mB6Xym4-kYXfBQTkwe19PWDcHM",
  authDomain: "chatapp-5fafb.firebaseapp.com",
  projectId: "chatapp-5fafb",
  storageBucket: "chatapp-5fafb.appspot.com",
  messagingSenderId: "162074111876",
  appId: "1:162074111876:web:c8b49efd2db77cce8ef7d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)