import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyA-B48uC0oYvfrXen_v8sB2hjc1S0pTMXk",
    authDomain: "ahmad-portfolio-316eb.firebaseapp.com",
    projectId: "ahmad-portfolio-316eb",
    storageBucket: "ahmad-portfolio-316eb.firebasestorage.app",
    messagingSenderId: "828391238125",
    appId: "1:828391238125:web:d3a1386ec8ea4e6aba5fe4",
    measurementId: "G-STMM39EBME"
};

// Initialize Firebase (Check if already initialized to prevent HMR errors)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);

// Auth Providers
const googleProvider = new GoogleAuthProvider();
googleProvider.addScope('https://www.googleapis.com/auth/userinfo.email');

const githubProvider = new GithubAuthProvider();
githubProvider.addScope('user:email');

// Initialize Analytics conditionally
let analytics = null;
if (typeof window !== 'undefined') {
    isSupported().then(supported => {
        if (supported) analytics = getAnalytics(app);
    });
}

export { app, db, auth, googleProvider, githubProvider, analytics };


