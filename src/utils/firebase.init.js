// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLD1hOL99U3CBcPA4bwSicoBHBviJ3HCM",
  authDomain: "fir-commerce-83eed.firebaseapp.com",
  projectId: "fir-commerce-83eed",
  storageBucket: "fir-commerce-83eed.appspot.com",
  messagingSenderId: "159325834083",
  appId: "1:159325834083:web:b1308a6df7d8e60801e156"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app