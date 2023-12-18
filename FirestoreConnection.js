import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// Import the functions you need from the SDKs you need

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv0MOHRjsK_DeJ8gtsEsKfmIn6XmvIlrY",
  authDomain: "ecommercestore-bcc18.firebaseapp.com",
  projectId: "ecommercestore-bcc18",
  storageBucket: "ecommercestore-bcc18.appspot.com",
  messagingSenderId: "238516682683",
  appId: "1:238516682683:web:b198f6f7bf9c82045f8e9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};

