 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyDpn0WAfJ86CucEgJs4Ie-6klICsDjo5qA",
   authDomain: "bitirme-81c58.firebaseapp.com",
   projectId: "bitirme-81c58",
   storageBucket: "bitirme-81c58.appspot.com",
   messagingSenderId: "32523428938",
   appId: "1:32523428938:web:c3220a3179987d492f72b3"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 

 //submit button
 const submit = document.getElementById('login');
  submit.addEventListener("click", function (event) {
    event.preventDefault()

    //inputs
 const email= document.getElementById('sign-in-email').value;
 const password= document.getElementById('sign-in-password').value;
 signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
   alert("Logging In...")
   window.location.href = "userpage.html" ;
   // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

  })