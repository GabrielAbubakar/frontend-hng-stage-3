// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAwvCmkXnmZ-tt1eION4m13ZQqmCtiIt3A",
    authDomain: "test-app-8d03e.firebaseapp.com",
    projectId: "test-app-8d03e",
    storageBucket: "test-app-8d03e.appspot.com",
    messagingSenderId: "246978581537",
    appId: "1:246978581537:web:65abf51b102f638588ff60",
    measurementId: "G-7D624G9TGX"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth()

export { app, auth }