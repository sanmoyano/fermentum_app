import { initializeApp } from "firebase/app";
import { getFirestore, FirebaseStorage } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB88JYhJvR81Ltgv6qbXIbjDujZ8vDDssI",
    authDomain: "fermentum-app.firebaseapp.com",
    projectId: "fermentum-app",
    storageBucket: "fermentum-app.appspot.com",
    messagingSenderId: "474499944590",
    appId: "1:474499944590:web:74078d36feef8d9bc939df"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


