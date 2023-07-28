// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBayaRwSOXWySen1tz8GDQC2dXwrCHrkM",
  authDomain: "testauth-fff6f.firebaseapp.com",
  projectId: "testauth-fff6f",
  storageBucket: "testauth-fff6f.appspot.com",
  messagingSenderId: "741898054088",
  appId: "1:741898054088:web:249bda791545e61ce878fd",
  measurementId: "G-XGXSNMQB1M"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
