/**
 * Inicializa o mapa na página individual do monumento
 * Mostra apenas um marcador no local da parada
 */
function initMonumentMap() {
  const mapEl = document.getElementById('map');
  if (!mapEl) return;

  const lat = parseFloat(mapEl.dataset.lat);
  const lon = parseFloat(mapEl.dataset.lon);
  if (isNaN(lat) || isNaN(lon)) return;

  const position = { lat, lng: lon };
  const map = new google.maps.Map(mapEl, {
    zoom: 15,
    center: position,
  });

  const iconPath = '../../src/img/monument.png';
  new google.maps.Marker({
    position,
    map,
    icon: iconPath,
  });
}

window.initMonumentMap = initMonumentMap;
