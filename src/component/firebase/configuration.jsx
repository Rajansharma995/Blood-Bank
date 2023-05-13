// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDejL2JhAlwK5nga4zgdfYPdTQynZzhTCY",
  authDomain: "bloodbank-7d9f0.firebaseapp.com",
  projectId: "bloodbank-7d9f0",
  storageBucket: "bloodbank-7d9f0.appspot.com",
  messagingSenderId: "321218046543",
  appId: "1:321218046543:web:8de25194469a1c3bbe183a",
  measurementId: "G-WDY450G454"
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, app };