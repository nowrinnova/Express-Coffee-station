// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3H3vkAiZtiMORHiV_PBoId38HsOFEh0U",
  authDomain: "coffee-station-48329.firebaseapp.com",
  projectId: "coffee-station-48329",
  storageBucket: "coffee-station-48329.firebasestorage.app",
  messagingSenderId: "216799273252",
  appId: "1:216799273252:web:f5a4da31644278ec8613b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getAuth } from "firebase/auth";
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);