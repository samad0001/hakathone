
  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";


  const firebaseConfig = {
    apiKey: "AIzaSyCsC8F5RuuY-CozgA6NqMnM9gEXz2NuQsI",
    authDomain: "olx-2-81281.firebaseapp.com",
    projectId: "olx-2-81281",
    storageBucket: "olx-2-81281.appspot.com",
    messagingSenderId: "120250152956",
    appId: "1:120250152956:web:2e68c954a4fd07b7d92479",
    measurementId: "G-P2ZHK5KLNE"
  };

  const app = initializeApp(firebaseConfig);



  const auth = getAuth(app);
  
 

  

function  SignIn(email , password){
    
return signInWithEmailAndPassword(auth, email, password)
 
}
  export {
    SignIn
  }