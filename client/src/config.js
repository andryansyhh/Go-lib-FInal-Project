import firebase from "firebase/app";
import "firebase/storage";

const app = firebase.initializeApp({
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  apiKey: "AIzaSyCMeQef4taTXwogy5E3eux1H4EcX8809B8",
  authDomain: "golib123.firebaseapp.com",
  databaseURL: "https://golib123-default-rtdb.firebaseio.com",
  projectId: "golib123",
  storageBucket: "golib123.appspot.com",
  messagingSenderId: "351792277264",
});

// Get a reference to the storage service, export it for use
export const storage = firebase.storage();

export default app;