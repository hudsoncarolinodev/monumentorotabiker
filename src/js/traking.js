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
      }

  document.querySelectorAll('.instagram').forEach((el)=>{
    el.addEventListener('click', trackInstagramCustomEvent)
  })
