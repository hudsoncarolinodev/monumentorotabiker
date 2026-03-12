import mapStyle from './styleMap.js'
import { monumentos } from './data.js'

const addresses = monumentos;

const listMonument = document.querySelector(".listMonument")
if (listMonument) {
addresses.forEach((address)=>{
    createTemplate(address)
})}

function createTemplate(address){
    const section = document.createElement("section")
    const button = document.createElement("button")
    button.addEventListener("click", abrirNoGoogleMaps)
    button.innerText = "Calcular rota"
    button.id = address.monument.replace(" ", "-")
    button.setAttribute('data-endeco', address?.location?.lat?`${address?.location?.lat} ${address?.location?.lon}`: `${address.address}`)
    
    const monumentLink = address.slug ? `/monumento/${address.slug}/` : '#'
    
    section.innerHTML = `
    <header>
    <h2>Parada: <a href="${monumentLink}">${address.name}</a></h2>
    
    <img src="./src/img/${address.flag}.png" alt="${address.address}">
    </header>
    <p><strong>Monumento:</strong> ${address.monument}<span class="em-construcao">${address.underconstruction}<span></p>
    <p class="description"><strong>Descrição:</strong> ${address.description}</p>
    <p><strong>Endereço:</strong> ${address.address}</p>
    <p><a class="instagram" title="${address.monument}" target="_blank" href="${address.instagram}">@${address.name} <img src="./src/img/instagram.png" alt="Instagram"></a><p>
    <p><a class="instagramRotaBiker" target="_blank" href="https://www.instagram.com/rota_biker/">Instagram oficial Rota Biker <img src="./src/img/instagram.png" alt="Instagram"></a><p>
    `
    const underConstruction = section.querySelector(".em-construcao")
    if (address.underconstruction !== "Em Construção") {
        underConstruction.style.display = "none"
    }

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


  document.querySelector("input").addEventListener('keyup', function(e){
    const value = e.target.value.toLowerCase().trim()
    listMonument.innerHTML = ''
    const filterAddresses = addresses.filter((addresse)=> {
        if(removerAcentos(addresse.name).includes(value) || removerAcentos(addresse.description).includes(value) || removerAcentos(addresse.address).includes(value) || removerAcentos(addresse.monument).includes(value)){
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

    addresses.forEach(address => {
       
        const option = document.createElement("option")
        option.value = address.flag
        option.innerText = address.flag.toUpperCase()
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
