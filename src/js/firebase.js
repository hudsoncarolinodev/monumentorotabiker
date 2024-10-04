   // Import the functions you need from the SDKs you need
   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-analytics.js";
   // TODO: Add SDKs for Firebase products that you want to use
   // https://firebase.google.com/docs/web/setup#available-libraries
 
   // Your web app's Firebase configuration
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
   const firebaseConfig = {
     apiKey: "AIzaSyDYCmR0lHkO5Abky9PxsE2-si-prca0ZnM",
     authDomain: "rota-biker-ee90a.firebaseapp.com",
     projectId: "rota-biker-ee90a",
     storageBucket: "rota-biker-ee90a.appspot.com",
     messagingSenderId: "266619444419",
     appId: "1:266619444419:web:45ddbc54078a55f0acd676",
     measurementId: "G-PB2M72YXL9"
   };
 
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const analytics = getAnalytics(app);