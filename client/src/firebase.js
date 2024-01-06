import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCZ92zfljSXZLp7ycfpBlrkQZynG-R0G8A",
  authDomain: "video-ab873.firebaseapp.com",
  projectId: "video-ab873",
  storageBucket: "video-ab873.appspot.com",
  messagingSenderId: "907458976639",
  appId: "1:907458976639:web:9dda158328e6178d81184a"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const provider=new GoogleAuthProvider()

export default app;