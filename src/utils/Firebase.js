
// Import the functions you need from the SDKs you need
import { getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhjPAYDoFDDpSyt2pA2ZX5IW3wnJrhH1I",
  authDomain: "eventbox-387706.firebaseapp.com",
  projectId: "eventbox-387706",
  storageBucket: "eventbox-387706.appspot.com",
  messagingSenderId: "107976876398",
  appId: "1:107976876398:web:5857da2c1aabda0e28617f",
  measurementId: "G-JHY4Z2BEQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
