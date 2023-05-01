// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC27zd196bWtPw_zOo_vG0ONw0ljOEJ11s",
  authDomain: "chef-recipe-book-ffb0b.firebaseapp.com",
  projectId: "chef-recipe-book-ffb0b",
  storageBucket: "chef-recipe-book-ffb0b.appspot.com",
  messagingSenderId: "506141081809",
  appId: "1:506141081809:web:15225ff0d8d87a54fbc5f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
