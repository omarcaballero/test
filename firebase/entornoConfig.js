// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf17VCeO8fZ35sX1emVZa6atbjk6_dKb0",
  authDomain: "ovcm-test.firebaseapp.com",
  projectId: "ovcm-test",
  storageBucket: "ovcm-test.appspot.com",
  messagingSenderId: "573102353618",
  appId: "1:573102353618:web:715ac68a3803057146510b",
  measurementId: "G-4PBWLT2KYT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);