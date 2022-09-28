// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN_sGw707q3vMIN8su4xS_vaEg6aPEOAk",
  authDomain: "alta-225.firebaseapp.com",
  projectId: "alta-225",
  storageBucket: "alta-225.appspot.com",
  messagingSenderId: "423126277352",
  appId: "1:423126277352:web:cfb37640849725d33d3d5d",
  measurementId: "G-67XB90KPZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);