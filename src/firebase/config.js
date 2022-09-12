import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAQbHgd7f-sjTr7ociEfpeHip6xd-dA9gc",
    authDomain: "mixcellence.firebaseapp.com",
    projectId: "mixcellence",
    storageBucket: "mixcellence.appspot.com",
    messagingSenderId: "963464917078",
    appId: "1:963464917078:web:f48a3a0ce0ce027e65cbf7",
    measurementId: "G-YZ0B1E5PNC"
};

initializeApp(firebaseConfig);

const app = getFirestore();

export {app};