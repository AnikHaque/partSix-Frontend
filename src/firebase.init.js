// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4lOb8AGXEo_iMgo735BNBrNVktNXV-eQ",
    authDomain: "partsix-9d55b.firebaseapp.com",
    projectId: "partsix-9d55b",
    storageBucket: "partsix-9d55b.appspot.com",
    messagingSenderId: "745594403558",
    appId: "1:745594403558:web:c42dfd21a3e16041bc1927"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
