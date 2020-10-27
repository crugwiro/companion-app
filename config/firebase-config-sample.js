/** @typedef {(import ('../common/services/firebase').FirebaseConfig)} FirebaseConfig */
/** @typedef {(import ('../common/declarations/process').FirebasePlatformConfig)} FirebasePlatformConfig */

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

/** @type {FirebasePlatformConfig} */
const firebaseMobileConfig = {
    ios: {
        appId: '...',
        apiKey: '...',
    },
    android: {
        appId: '...',
        apiKey: '...',
    },
};

module.exports = {
    firebaseConfig,
    firebaseMobileConfig,
};
