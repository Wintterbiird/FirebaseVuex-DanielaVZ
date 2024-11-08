import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC8Gg5MjgU6ywV3wcaGsIsNVpdW_MQsV0A",
    authDomain: "basededatosusuarios-3fad6.firebaseapp.com",
    projectId: "basededatosusuarios-3fad6",
    storageBucket: "basededatosusuarios-3fad6.firebasestorage.app",
    messagingSenderId: "835881076794",
    appId: "1:835881076794:web:3b08531d7270ab76810d03"
};

const app = initializeApp(firebaseConfig);

export default app