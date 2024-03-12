

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKM1L9c0a9G-lHxEBbo3T-g6SxeaG72R0",
  authDomain: "mern-book-inventory-533f5.firebaseapp.com",
  projectId: "mern-book-inventory-533f5",
  storageBucket: "mern-book-inventory-533f5.appspot.com",
  messagingSenderId: "1066723900821",
  appId: "1:1066723900821:web:4718eac1e8559c7cfc4a9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;