
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

   
function trackInstagramCustomEvent(e) {
  const title = e?.target?.title?.replace(" ", "-")
    gtag('event', 'custom_event', {
      'event_category': 'Instagram Parada',
      'event_label': `Parada ${title}`,
      'value': 1
    })
  }

  function trackSelectCustomEvent(value) {
      gtag('event', 'custom_event', {
        'event_category': 'Select Pesquisa estado',
        'event_label': `Pesquisa ${value}`,
        'value': 1
      })
    }

    function trackCalculateCustomEvent(value) {
        gtag('event', 'custom_event', {
          'event_category': 'Botão Calcular rota',
          'event_label': `Calculo de rota ${value}`,
          'value': 1
        })

      db.collection("eventos").add({
          categoria: 'custom_event',
          acao: 'botao-calcular-rota',
          rotulo: `Calculo de rota ${value}`,
          data: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then((docRef) => {
          console.log("Evento registrado com ID: ", docRef.id);
      })
      .catch((error) => {
          console.error("Erro ao registrar evento: ", error);
      });
      }

  document.querySelectorAll('.instagram').forEach((el)=>{
    el.addEventListener('click', trackInstagramCustomEvent)
  })
