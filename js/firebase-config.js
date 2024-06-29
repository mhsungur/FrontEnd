// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBa0m-TvT783p4D04KrYMYHIm9yILEpp_s",
    authDomain: "finlearn-798c3.firebaseapp.com",
    projectId: "finlearn-798c3",
    storageBucket: "finlearn-798c3.appspot.com",
    messagingSenderId: "633496484218",
    appId: "1:633496484218:web:3cdec4b56ec242e2f6fec3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, signOut };
