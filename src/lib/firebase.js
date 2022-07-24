import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAGcX2HppMlZMRTW88nKXzR7L9r-tixxNc",
  authDomain: "instagramclone-c8555.firebaseapp.com",
  projectId: "instagramclone-c8555",
  storageBucket: "instagramclone-c8555.appspot.com",
  messagingSenderId: "1099017934067",
  appId: "1:1099017934067:web:718f6cb8bb88307ede5386",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
