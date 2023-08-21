// Firebase web version 9 https://firebase.google.com/docs/firestore/quickstart#web-version-9_4

import { initializeApp, getApps } from 'firebase/app';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import { getAuth, connectAuthEmulator } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.GATSBY_API_KEY,
  authDomain: process.env.GATSBY_FB_AUTH_DOMAIN,
  projectId: process.env.GATSBY_FB_PROJECT_ID,
  storageBucket: process.env.GATSBY_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_FB_MESSAGING_SENDER_ID,
  appId: process.env.GATSBY_FB_APPID,
};

// Initialisation: TODO a check to make sure it's not initialised twice?

const initialiseServices = () => {
  const isConfigured = getApps().length > 0;
  const firebaseApp = initializeApp(firebaseConfig);
  const firestore = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  const appCheck = initializeAppCheck(firebaseApp, {
    provider: new ReCaptchaV3Provider(process.env.GATSBY_RECAPTCHA_SITE_KEY!),
    isTokenAutoRefreshEnabled: true,
  });
  return { firebaseApp, firestore, auth, isConfigured, appCheck };
};

// @ts-ignore
const connectToEmulators = ({ auth, firestore }) => {
  // eslint-disable-next-line no-restricted-globals
  if (location.hostname === 'localhost') {
    // console.log('connecting to emulators');
    connectFirestoreEmulator(firestore, 'localhost', 8080);
    connectAuthEmulator(auth, 'http://localhost:9099');
  }
};

export const getFirebase = () => {
  const services = initialiseServices();
  if (!services.isConfigured) {
    connectToEmulators(services);
  }
  return services;
};

// enabling reCAPTCHA v3 debug token (with a TS fix)
declare global {
  interface Window {
    FIREBASE_APPCHECK_DEBUG_TOKEN: boolean;
  }
}
if (process.env.NODE_ENV !== 'production') {
  console.log('Not live, captcha debugging');
  // eslint-disable-next-line no-restricted-globals
  self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
}
