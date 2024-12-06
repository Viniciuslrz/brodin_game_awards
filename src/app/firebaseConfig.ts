import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC1R4Hu3KWfdgKFKypVi9jobqn68b8MX_A",
    authDomain: "brodin-game-awards.firebaseapp.com",
    databaseURL: "https://brodin-game-awards-default-rtdb.firebaseio.com",
    projectId: "brodin-game-awards",
    storageBucket: "brodin-game-awards.firebasestorage.app",
    messagingSenderId: "496549937362",
    appId: "1:496549937362:web:99c300b0a7df9541d2ad0b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };