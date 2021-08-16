import firebase from 'firebase';
import 'firebase/auth';
const yaml = require('js-yaml');
const fs = require('fs');
// import '../../../.github/workflows/'

// Initialize Firebase
let doc
console.log(doc)
try {
    doc = yaml.load(fs.readFileSync('../../../.github/workflows/main.yml', 'utf-8'));
    console.log('nini', (doc.jobs.sets.steps[1].env))
} catch (error) {
    console.log('errors', error)
}

const app = doc !== undefined ? firebase.initializeApp({
    apiKey: doc.jobs.sets.steps[1].env.REACT_APP_FIREBASE_KEY,
    authDomain: doc.jobs.sets.steps[1].env.REACT_APP_FIREBASE_DOMAIN,
    projectId: doc.jobs.sets.steps[1].env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: doc.jobs.sets.steps[1].env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: doc.jobs.sets.steps[1].env.REACT_APP_FIREBASE_SENDER_ID,
    appId: doc.jobs.sets.steps[1].env.REACT_APP_FIREBASE_APP_ID,
}) : firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
});
// const app = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
// });

export default app