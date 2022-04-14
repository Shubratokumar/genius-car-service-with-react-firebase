// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB7OAiONtQJ-rKIrwgJ5va8Bueko8tbQk",
  authDomain: "genius-car-services-fd6ac.firebaseapp.com",
  projectId: "genius-car-services-fd6ac",
  storageBucket: "genius-car-services-fd6ac.appspot.com",
  messagingSenderId: "279916157224",
  appId: "1:279916157224:web:6d6c8b61125bddf81b981d"
  /* apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId, */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;