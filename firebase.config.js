// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPaW59kvaTd0sbdSBH9JrUxduPaZ7t5GA",
  authDomain: "assignment-10-client-b6ae7.firebaseapp.com",
  projectId: "assignment-10-client-b6ae7",
  storageBucket: "assignment-10-client-b6ae7.appspot.com",
  messagingSenderId: "123304206520",
  appId: "1:123304206520:web:d47bad82fe7fbeb673144d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
