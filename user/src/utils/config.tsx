import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";

type configType = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
};


const firebaseConfig:configType = {
  apiKey: process.env.MY_API_KEY!,
  authDomain: process.env.AUTH_DOMAIN!,
  projectId: process.env.PROJECT_ID!,
  storageBucket: process.env.STORAGE_BUCKET!,
  messagingSenderId: process.env.MESSAGING_SENDER_ID!,
  appId: process.env.APP_ID!,
  measurementId: process.env.MEASUREMENT_ID!,
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
