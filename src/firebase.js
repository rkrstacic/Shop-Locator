import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyChdPYY4VC5t91L5VO8t171_Nliv6WvqU8",
    authDomain: "shop-locator-fipu.firebaseapp.com",
    projectId: "shop-locator-fipu",
    storageBucket: "shop-locator-fipu.appspot.com",
    messagingSenderId: "61191661633",
    appId: "1:61191661633:web:52a4f9336ae988580d7ec0",
};

// Initialization
const app = initializeApp(firebaseConfig);

export {
    firebase,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
};
