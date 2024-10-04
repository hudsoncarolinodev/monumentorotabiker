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

 
 
  const firebaseConfig = {
    apiKey: "AIzaSyDYCmR0lHkO5Abky9PxsE2-si-prca0ZnM",
    authDomain: "rota-biker-ee90a.firebaseapp.com",
    projectId: "rota-biker-ee90a",
    storageBucket: "rota-biker-ee90a.appspot.com",
    messagingSenderId: "266619444419",
    appId: "1:266619444419:web:45ddbc54078a55f0acd676",
    measurementId: "G-PB2M72YXL9"
  }


  const app = initializeApp(firebaseConfig)
  const analytics = getAnalytics(app)
