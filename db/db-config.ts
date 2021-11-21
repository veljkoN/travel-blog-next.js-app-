import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: process.env.REACT_DEV_API_KEY,
  authDomain: process.env.REACT_DEV_AUTH_DOMAIN,
  projectId: process.env.REACT_DEV_PROJECT_ID,
  storageBucket: process.env.REACT_DEV_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_DEV_MESS_SEND_ID,
  appId: process.env.REACT_DEV_APP_ID,
  measurementId: process.env.REACT_DEV_MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig)
export const db:any = getFirestore(app);