import mapStyle from './styleMap.js'
import { monumentos } from './data.js'

const addresses = monumentos;

const listMonument = document.querySelector(".listMonument")

function updateListCount(count) {
  const el = document.getElementById("listCount")
  if (el) el.textContent = count === 1 ? "1 parada" : `${count} paradas`
}

function renderList(items) {
  if (!listMonument) return
  listMonument.innerHTML = ""
  items.forEach((address) => createTemplate(address))
  updateListCount(items.length)
}

if (listMonument) {
  renderList(addresses)
}

function createTemplate(address){
    const section = document.createElement("article")
    section.className = "monument-card"
    const button = document.createElement("button")
    button.className = "btn-route"
    button.addEventListener("click", abrirNoGoogleMaps)
    button.innerHTML = '<span class="btn-icon">📍</span> Calcular rota'
    button.id = address.monument.replace(" ", "-")
    button.setAttribute('data-endeco', address?.location?.lat?`${address?.location?.lat} ${address?.location?.lon}`: `${address.address}`)
    
    const monumentLink = address.slug ? `/monumento/${address.slug}/` : '#'
    const badgeHtml = address.underconstruction === 'Em Construção' ? '<span class="badge badge-warning">Em construção</span>' : ''
    
    section.innerHTML = `
    <div class="card-header">
      <div class="card-title-wrap">
        <span class="card-number">${address.monument.replace('Monumento ', '')}</span>
        <h2 class="card-title"><a href="${monumentLink}">${address.name}</a></h2>
        ${badgeHtml}
      </div>
      <img src="./src/img/${address.flag}.png" alt="${address.flag.toUpperCase()}" class="card-flag">
    </div>
    <div class="card-body">
      <p class="card-address">${address.address}</p>
      <p class="card-desc description">${address.description || 'Parada Rota Biker'}</p>
      <div class="card-actions">
        <a class="card-link instagram" title="${address.monument}" target="_blank" rel="noopener" href="${address.instagram}">
          <img src="./src/img/instagram.png" alt=""> Ver Instagram
        </a>
        <a class="card-link" target="_blank" rel="noopener" href="https://www.instagram.com/rota_biker/">Rota Biker Oficial</a>
      </div>
    </div>
    `
    const description = section.querySelector(".description")
    if(!address.description) {
        description.style.display = "none"
    }

    section.appendChild(button)
    listMonument.appendChild(section)
}

function initMap() {
    
    //CONFIGURAÇÃO MAPAS
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
      center: { lat: -23.6824124, lng: -46.5952992 },
      styles: mapStyle
    });



    const geocoder = new google.maps.Geocoder();

    addresses.forEach(address => {
        const monumentUrl = address.slug ? `/monumento/${address.slug}/` : address.instagram;
        geocodeAddress(geocoder, map, address.address, monumentUrl);
    });
    
    
  }

  async function geocodeAddress(geocoder, map, address, link) {
        await geocoder.geocode({ address: address }, (results, status) => {
            if(status == 'OK'){

                const image = "./src/img/monument.png";
                    const beachMarker = new google.maps.Marker({
                    position: {
                        lat: results[0].geometry.location.lat(),
                        lng: results[0].geometry.location.lng()
                    },
                    map,
                    icon: image,
                    }).addListener('click', function() {
                        window.open(link, '_blank')
                    })
            }
        })
    }
  
  window.initMap = initMap;


  const searchInput = document.querySelector("#search")
  if (searchInput && listMonument) {
  searchInput.addEventListener('keyup', function(e){
    const value = e.target.value.toLowerCase().trim()
    listMonument.innerHTML = ''
    const filterAddresses = addresses.filter((addresse)=> {
        const desc = (addresse.description || '').toString()
        if(removerAcentos(addresse.name).includes(value) || removerAcentos(desc).includes(value) || removerAcentos(addresse.address).includes(value) || removerAcentos(addresse.monument).includes(value)){
            return addresse
        }
    })
    if(filterAddresses.length > 0){
        filterAddresses.forEach((address)=>{
            createTemplate(address)
        })

        return
    }
    addresses.forEach((address)=>{
        createTemplate(address)
    })
  })

  function removerAcentos(str) {
      return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
    }
    

  function selectState(){
        const select = document.querySelector("#select")
        const filtro = document.querySelector("#filtro")
        if (!select || !filtro) return

    const uniqueFlags = [...new Set(addresses.map((a) => a.flag))].sort()
    uniqueFlags.forEach((flag) => {
        const option = document.createElement("option")
        option.value = flag
        option.innerText = flag.toUpperCase()
        select.appendChild(option)
    })

    // Filtro estados
    select.addEventListener('change', function(e){
        listMonument.innerHTML = ''
        const value = e.target.value
        trackSelectCustomEvent(value)

        // Desativa o filtro de descrição
        filtro.selectedIndex = 0

        const filterAddresses = addresses.filter((addresse)=> {
            if(addresse.flag === value){
                return addresse
            }
        })

        if(filterAddresses.length > 0){
            filterAddresses.forEach((address)=>{
                createTemplate(address)
            })

            return
        }

        addresses.forEach((address)=>{
            createTemplate(address)
        })
       
    })



    // Filtro de descrição
    const options = [
        {value: "Em Construção"},
        {value: "Passaporte"},
        {value: "Carimbo"},
        {value: "Passaporte/Carimbo"},
    ]

    options.forEach(optionData => {
        const option = document.createElement("option")
        option.value = optionData.value
        option.innerText = optionData.value
        filtro.appendChild(option)
    })

    filtro.addEventListener('change', function(e){
        listMonument.innerHTML = ''
        const value = e.target.value
        trackSelectCustomEvent(value)

        // Desativa o filtro de estado
        select.selectedIndex = 0

        if (value === "all") {
            addresses.forEach((address) => {
                createTemplate(address)
            })
            return
        }

        const filterAddresses = addresses.filter((addresse)=> {
            return (
                addresse.underconstruction == value || addresse.description === value
            )
        })
        if(filterAddresses.length > 0){
            filterAddresses.forEach((address)=>{
                createTemplate(address)
            })

            return
        }
    })
}
selectState()


const positionUser = {
    lat: null,
    lon: null
}
function obterLocalizacao() {
    
}

obterLocalizacao()

function abrirNoGoogleMaps(e) {
    let address = e.target.getAttribute('data-endeco')?.split(" ")
    const idsTraking = e.target.id
    
    if(positionUser?.lat && positionUser?.lon){
        trackCalculateCustomEvent(idsTraking)
        const destino = 'São Paulo, SP'; // Altere para o destino desejado
        const url = address.length > 2 ?`https://www.google.com/maps/dir/?api=1&origin=${positionUser.lat},${positionUser.lon}&destination=${e.target.getAttribute('data-endeco')}`:
        `https://www.google.com/maps/dir/?api=1&origin=${positionUser.lat},${positionUser.lon}&destination=${address[0]},${address[1]}`
        window.open(url, '_blank');

        return
    }
    
    if (navigator.geolocation) {
        // Solicita a localização atual
        navigator.geolocation.getCurrentPosition(
            function(position) {
                // Sucesso: obtém as coordenadas e exibe
                positionUser.lat = position.coords.latitude;
                positionUser.lon = position.coords.longitude;
                trackCalculateCustomEvent(idsTraking)
                const destino = 'São Paulo, SP'; // Altere para o destino desejado
                const url = address.length > 2 ?`https://www.google.com/maps/dir/?api=1&origin=${positionUser.lat},${positionUser.lon}&destination=${e.target.getAttribute('data-endeco')}`:
                `https://www.google.com/maps/dir/?api=1&origin=${positionUser.lat},${positionUser.lon}&destination=${address[0]},${address[1]}`
                window.open(url, '_blank');
             
              //  document.getElementById('localizacao').innerText = `Latitude: ${lat}, Longitude: ${lon}`;
            },
            function(error) {
                // Erro: exibe uma mensagem de erro
                console.error('Erro ao obter a localização:', error.message);
             //   document.getElementById('localizacao').innerText = `Erro ao obter a localização: ${error.message}`;
            }
        );
    } else {
        // Geolocalização não é suportada
      //  document.getElementById('localizacao').innerText = 'Geolocalização não é suportada pelo seu navegador.';
    }

}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function(position) {
            // Sucesso: obtém as coordenadas e exibe
            positionUser.lat = position.coords.latitude;
            positionUser.lon = position.coords.longitude;
         
          //  document.getElementById('localizacao').innerText = `Latitude: ${lat}, Longitude: ${lon}`;
        },
        function(error) {
            // Erro: exibe uma mensagem de erro
            console.error('Erro ao obter a localização:', error.message);
         //   document.getElementById('localizacao').innerText = `Erro ao obter a localização: ${error.message}`;
        }
    );
} else {
    // Geolocalização não é suportada
  //  document.getElementById('localizacao').innerText = 'Geolocalização não é suportada pelo seu navegador.';
}
