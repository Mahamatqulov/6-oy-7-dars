import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUUcgZc7sACs8331WugQBCUnkCZKMFefM",
  authDomain: "m-market-f21d8.firebaseapp.com",
  projectId: "m-market-f21d8",
  storageBucket: "m-market-f21d8.firebasestorage.app",
  messagingSenderId: "572562114577",
  appId: "1:572562114577:web:36521943e68896b244c9b0",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
