const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');

const firebaseConfig = {
    apiKey: "AIzaSyDlHZKe5w7TcQKOCb-nfCEOwa08VyVHBnA",
    authDomain: "wesopt29-uju.firebaseapp.com",
    projectId: "wesopt29-uju",
    storageBucket: "wesopt29-uju.appspot.com",
    messagingSenderId: "109387446314",
    appId: "1:109387446314:web:62eaa30a0d2a60301deb53",
    measurementId: "G-85QDM0HC8C",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

module.exports = { firebaseApp, firebaseAuth, firebaseConfig };