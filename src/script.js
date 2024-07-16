// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1zOkHZbgNKfGOO6_1_uXBDvIcR3Ro-3E",
  authDomain: "authentication-9e0bd.firebaseapp.com",
  projectId: "authentication-9e0bd",
  storageBucket: "authentication-9e0bd.appspot.com",
  messagingSenderId: "1051076438450",
  appId: "1:1051076438450:web:d5fdba71270c938b535cab",
  measurementId: "G-4C77PDCMR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);