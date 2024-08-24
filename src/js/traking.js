function trackInstagramCustomEvent(e) {
  const title = e?.target?.title?.replace(" ", "-")
    gtag('event', 'custom_event', {
      'event_category': 'Instagram Parada',
      'event_label': `Parada ${title}`,
      'value': 1
    })
  }

  document.querySelectorAll('.instagram').forEach((el)=>{
    el.addEventListener('click', trackInstagramCustomEvent)
  })
