import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhD2eGwgJYAkz4eW9OzEcF-81b9ETzVO0",
  authDomain: "fish-test-d7664.firebaseapp.com",
  projectId: "fish-test-d7664",
  storageBucket: "fish-test-d7664.appspot.com",
  messagingSenderId: "228240638807",
  appId: "1:228240638807:web:b7b518abc07a9296cab412",
  measurementId: "G-8WTJLB0Q6C"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);