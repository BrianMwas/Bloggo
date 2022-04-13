import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, doc, getFirestore } from "firebase/firestore/lite";


const firebaseConfig = {
    apiKey: 'AIzaSyAw7cB7BaZZMm_Rj04qeKPGZHYNjUaSIIM',
    authDomain: 'bloggo-d9c26.firebaseapp.com',
    projectId: 'bloggo-d9c26',
    storageBucket: 'bloggo-d9c26.appspot.com',
    messagingSenderId: '913768262787',
    appId: '1:913768262787:web:ced0150fe7c311c1bc7fb6',
    measurementId: 'G-2BS7HTS6X5'
};

// Initialize our firebase for our application
let app = initializeApp(firebaseConfig);
const auth = getAuth(app);
let db = getFirestore(app);
const blogCollection = collection(db, "blogs");
const userDoc = (userId) => doc(db, "users", userId);
const blogDoc = (blogId) => doc(db, "blogs", blogId)

export {
    auth,
    db,
    blogCollection,
    userDoc,
    blogDoc
}