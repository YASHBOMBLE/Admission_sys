// firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
APIKEY : "AIzaSyCRlzPFadmzz9TsVJZ0TK2Z10UFEpaAewE",
authDomain: "admission-18246.firebaseapp.com",
projectId: "admission-18246",
storageBucket: "admission-18246.appspot.com",
messagingSenderId: "890610479449",
appId: "1:890610479449:web:e477aef39620093e235c48",
measurementId: "G-2KFYXFKKS3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
