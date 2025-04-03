// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpmOmefvmoglwecsNznSrFUdSEsiMqr6A",
  authDomain: "webrtc-727ee.firebaseapp.com",
  projectId: "webrtc-727ee",
  storageBucket: "webrtc-727ee.firebasestorage.app",
  messagingSenderId: "1075416569790",
  appId: "1:1075416569790:web:7d6fa1a711070bf39e4bef",
  measurementId: "G-NW6NYVV1T8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



