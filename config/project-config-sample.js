/** @typedef {(import ('../common/services/firebase').FirebaseConfig)} FirebaseConfig */
/** @typedef {(import ('../common/declarations/process').FirebasePlatformConfig)} FirebasePlatformConfig */
/** @typedef {(import ('../common/declarations/process').IntegrationConfigs)} IntegrationConfigs */

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
    measurementId: "...",
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

/** @type {IntegrationConfigs} */
const integrationConfigs = {
    SentryDsn: '...',
};

module.exports = {
    firebaseConfig,
    firebaseMobileConfig,
    integrationConfigs,
};
