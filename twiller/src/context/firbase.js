
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBuwmTOR2zQtFiZJyzMnKTQj0BUBNoOzus",
  authDomain: "twiller-eba00.firebaseapp.com",
  projectId: "twiller-eba00",
  storageBucket: "twiller-eba00.firebasestorage.app",
  messagingSenderId: "767955727207",
  appId: "1:767955727207:web:e9b40a539ddd8a7319b5c2",
  measurementId: "G-23KC1N9FPJ"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app
//const analytics = getAnalytics(app);