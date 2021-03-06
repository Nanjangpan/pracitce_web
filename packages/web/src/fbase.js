import firebase from "firebase/app";
import "firebase/auth"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APP_ID
};

if(!firebase.apps.length) { // 해당 과정이 없으면 초기화를 계속해 에러 발생
    firebase.initializeApp(firebaseConfig);
}

export const authService = firebase.auth();

