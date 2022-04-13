// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnxSz0JRJlIXVDwYXxOr8faiSdXeC37gk",
    authDomain: "genius-car-services2-6af8f.firebaseapp.com",
    projectId: "genius-car-services2-6af8f",
    storageBucket: "genius-car-services2-6af8f.appspot.com",
    messagingSenderId: "256773074380",
    appId: "1:256773074380:web:702c345e1d92779ac24169"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;