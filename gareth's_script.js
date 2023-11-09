// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
  import { getStorage, ref} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-storage.js";
//   import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";


  
  // original database
  // const firebaseConfig = {
  //   apiKey: "AIzaSyAl2lzXdCh1LjTPj1C5Oy0Lm85gE7usmIw",
  //   authDomain: "wad2-17f09.firebaseapp.com",
  //   databaseURL: "https://wad2-17f09-default-rtdb.firebaseio.com",
  //   projectId: "wad2-17f09",
  //   storageBucket: "gs://wad2-17f09.appspot.com",
  //   messagingSenderId: "62610007667",
  //   appId: "1:62610007667:web:591f8951bbe984cdacac06",
  //   measurementId: "G-NH6H2KFT09"
  // };

  // backup database this has the like and comments
  const firebaseConfig = {
    apiKey: "AIzaSyDEk77OIXpJdLHLUCA7aDSsildfVsmeDCg",
    authDomain: "wad2-8e4a4.firebaseapp.com",
    projectId: "wad2-8e4a4",
    storageBucket: "wad2-8e4a4.appspot.com",
    messagingSenderId: "384425470357",
    appId: "1:384425470357:web:970a230af00d81207cee9c",
    measurementId: "G-TDCJHZ0MK2"
  };

  // Initialize Firebase
  console.log("Firebase initialising...");
  const app = firebase.initializeApp(firebaseConfig);
  const storage = getStorage(app);
  
  

    // Initialize database

