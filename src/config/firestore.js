// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbqobFZcMdgYNlifXFITz4VsFWycaI6B4",
  authDomain: "react-eshop-3e3fb.firebaseapp.com",
  projectId: "react-eshop-3e3fb",
  storageBucket: "react-eshop-3e3fb.appspot.com",
  messagingSenderId: "57465388944",
  appId: "1:57465388944:web:1f155242b25b9cbd5cfd15",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
