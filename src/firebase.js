import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import {
	getFirestore,
	collection,
	addDoc,
	getDocs,
	query,
	where,
	orderBy,
	deleteDoc,
	doc,
	setDoc,
} from "firebase/firestore";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
	getAuth,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { Firestore } from "firebase/firestore";

// Old Project
/*
const firebaseConfig = {
	apiKey: "AIzaSyChdPYY4VC5t91L5VO8t171_Nliv6WvqU8",
	authDomain: "shop-locator-fipu.firebaseapp.com",
	projectId: "shop-locator-fipu",
	storageBucket: "shop-locator-fipu.appspot.com",
	messagingSenderId: "61191661633",
	appId: "1:61191661633:web:52a4f9336ae988580d7ec0",
};*/

const firebaseConfig = {
	apiKey: "AIzaSyBu1U3wRyA9fmiOTkKeXRFvwKnHqOz4Rig",
	authDomain: "shop-locator-fipu-a9f7d.firebaseapp.com",
	projectId: "shop-locator-fipu-a9f7d",
	storageBucket: "shop-locator-fipu-a9f7d.appspot.com",
	messagingSenderId: "1042101196765",
	appId: "1:1042101196765:web:4d9ac1a88476f7404fc834",
};

// Initialization
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
	firebase,
	db,
	doc,
	getStorage,
	getDownloadURL,
	ref,
	uploadBytes,
	setDoc,
	collection,
	orderBy,
	addDoc,
	getDocs,
	deleteDoc,
	query,
	where,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
};
