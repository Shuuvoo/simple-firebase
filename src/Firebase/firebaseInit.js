// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSvhRAhHmN7KJfi8SZufEhqhac4VRwIeM",
  authDomain: "simple-firebase-d178d.firebaseapp.com",
  projectId: "simple-firebase-d178d",
  storageBucket: "simple-firebase-d178d.appspot.com",
  messagingSenderId: "81004346512",
  appId: "1:81004346512:web:12f36b4b4eff427f3fac15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app