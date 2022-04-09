import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database"; 

const firebaseConfig = {
  apiKey: "AIzaSyDQvelWv5RtlyMWGljB8Bf9NHntJEPoHI0",
  authDomain: "newproject-bf09e.firebaseapp.com",
  databaseURL: "https://newproject-bf09e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "newproject-bf09e",
  storageBucket: "newproject-bf09e.appspot.com",
  messagingSenderId: "467881095540",
  appId: "1:467881095540:web:41219df415ddaaae457c21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app); 
const dbRef = ref(db); 


onValue(dbRef, snapshot => {
    const data = snapshot.val(); 
    console.log(data); 
})