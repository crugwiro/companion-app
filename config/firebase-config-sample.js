/** @typedef {(import ('../common/services/firebase').FirebaseConfig)} FirebaseConfig */

/*
    Provides settings generated from the Firebase 
    web-app setup
*/
/** @type {FirebaseConfig} */
const firebaseConfig = {
    apiKey: "...",
    authDomain: "...",
    databaseURL: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "...",
    measurementId: "..."
};

module.exports = {
    firebaseConfig,
};
