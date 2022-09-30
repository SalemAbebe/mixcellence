import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

//firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQbHgd7f-sjTr7ociEfpeHip6xd-dA9gc",
  authDomain: "mixcellence.firebaseapp.com",
  projectId: "mixcellence",
  storageBucket: "mixcellence.appspot.com",
  messagingSenderId: "963464917078",
  appId: "1:963464917078:web:f48a3a0ce0ce027e65cbf7",
  measurementId: "G-YZ0B1E5PNC",
};

// initialize firebase
initializeApp(firebaseConfig);

//initialize firestore
const app = getFirestore();

//initialize authentication
const auth = getAuth();

export { app, auth };
