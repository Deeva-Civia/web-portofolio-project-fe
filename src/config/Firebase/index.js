// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDWBVJbHWSO3fdxMhF-BXkBpb6UP_WrucY",
    authDomain: "deeva-web-portofolio.firebaseapp.com",
    projectId: "deeva-web-portofolio",
    storageBucket: "deeva-web-portofolio.firebasestorage.app",
    messagingSenderId: "869497597112",
    appId: "1:869497597112:web:5b127a1357c3aa3542d84d",
    databaseURL: "https://deeva-web-portofolio-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);