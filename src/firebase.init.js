// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDuu1TIOCPHkeLZz3fWLZ9YCBSK49nOE0E",
    authDomain: "volunteer-network-47ae3.firebaseapp.com",
    projectId: "volunteer-network-47ae3",
    storageBucket: "volunteer-network-47ae3.appspot.com",
    messagingSenderId: "263758845590",
    appId: "1:263758845590:web:11434287e9403cf59714b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth