// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDKBngaVhHPMUoSERdGlRFJs4jc9YFWwg",
  authDomain: "email-password-auth-5f9c4.firebaseapp.com",
  projectId: "email-password-auth-5f9c4",
  storageBucket: "email-password-auth-5f9c4.appspot.com",
  messagingSenderId: "525976245419",
  appId: "1:525976245419:web:d762f196b11f70d68293ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;