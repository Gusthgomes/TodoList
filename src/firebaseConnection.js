// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASX2CEBSn0hYNI1yWDNfQFsUnnGgw-zvU",
  authDomain: "todo-list-d01f5.firebaseapp.com",
  projectId: "todo-list-d01f5",
  storageBucket: "todo-list-d01f5.appspot.com",
  messagingSenderId: "582642899661",
  appId: "1:582642899661:web:651a5f84c4e35aa5d0e784",
  measurementId: "G-T0KZHY68JN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };
export { analytics };