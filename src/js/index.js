import mapStyle from './styleMap.js'

const addresses = [
    {
        name: 'Serpenteando Café',
        monument: 'Monumento 1',
        description:'Passaporte/Carimbo',
        address: 'Estr. Da Ribeira, km 71, Bocaiúva do Sul - PR, 83450-000',
        flag:'pr',
        instagram: 'https://www.instagram.com/serpenteando.cafe/',
        location: {
            lat: '-25.07765438720003',
            lon: '-49.086307360061866',
        },
        underconstruction: 'Construído',
    },
    {
        name: 'Panda Mechanics',
        monument: 'Monumento 2',
        description:'Passaporte/Carimbo',
        address: 'Av. Com. Franco, 4387 - Uberaba, Curitiba - PR, 81530-440',
        flag:'pr',
        instagram: 'https://www.instagram.com/pandamechanics/',
        location: {
            lat: '-25.469752011034366',
            lon: '-49.23041471813094',
        },
        underconstruction: 'Construído',
    },
    {
        name: 'Mirante 12',
        monument: 'Monumento 3',
        description:'Passaporte/Carimbo',
        address: 'Estrada geral, SC-390, km 12, Lauro Müller - SC, 88880-000',
        flag:'sc',
        instagram: 'https://www.instagram.com/mirantedo12/',
        location: {
            lat: '-28.38481783793182',
            lon: '-49.485074181599536',
        },
        underconstruction: 'Construído',
    },
    {
        name: 'Rota 370',
        monument: 'Monumento 4',
        description:'Passaporte/Carimbo',
        address: 'SC-370 - Urubici, SC, 88650-000',
        flag:'sc',
        instagram: 'https://www.instagram.com/rota370urubici/',
        location: {
            lat: '-27.998621009965447',
            lon: '-49.554484318281325',
        },
        underconstruction: 'Construído',
    },
    {
        name: 'Rota PR 218',
        monument: 'Monumento 5',
        description:'Passaporte/Carimbo',
        address: 'R. Benedito Salles, 2671 - Carlópolis, PR, 86420-000',
        flag:'pr',
        instagram: 'https://www.instagram.com/rotapr218/',
        location: {
            lat: '-23.419699777783975',
            lon: '-49.70876704414918',
        },
        underconstruction: 'Construído',
    },
    {
        name: 'Rota Bike Café',
        monument: 'Monumento 6',
        description:'Passaporte/Carimbo',
        address: 'Estr. Geral Rio Milanês - Cedro Alto, Rio dos Cedros - SC, 89121-000',
        flag:'sc',
        instagram: 'https://www.instagram.com/rotabikecafe/',
        location: {
            lat: '-26.672052483667084',
            lon: '-49.32140163583835',
        },
        underconstruction: 'Construído',
    },
    {
        name: 'Container da Serra',
        monument: 'Monumento 7',
        description:'Passaporte/Carimbo',
        address: 'SC-477 - São João da Esperança, Dr. Pedrinho - SC, 89126-000',
        flag:'sc',
        instagram: 'https://www.instagram.com/containerdaserra/',
        location: {
            lat: '-26.625422574122982',
            lon: '-49.51658913206693',
        },
        underconstruction: 'Construído',
    },
    {
        name: '261',
        monument: 'Monumento 8',
        description:'Passaporte/Carimbo',
        address: 'R. Avelino Domingues Menk, 114 - Centro, Guapiara - SP, 18310-000',
        flag:'sp',
        instagram: 'https://www.instagram.com/parada_261/',
        location: {
            lat: '-24.18979485759995',
            lon: '-48.536707597604085',
        },
        underconstruction: 'Construído',
    },
    {
        name: 'Posto Rota 090',
        monument: 'Monumento 9',
        description:'Passaporte/Carimbo',
        address: 'PR-090, 147 - Km 147, Piraí do Sul - PR, 84240-000',
        flag:'pr',
        instagram: 'https://www.instagram.com/rota090/',
        location: {
            lat: '-24.53785525770189',
            lon: '-49.95786054160373',
        },
        underconstruction: 'Construído',
    },
    {
        name: 'Município de Jaguarão-RS',
        monument: 'Monumento 10',
        description:'',
        address: 'Av. 20 de Setembro, 401-303, Jaguarão - RS, 96300-000',
        flag:'rs',
        instagram: 'https://www.instagram.com/terrasulmotos/',
        location: {
            lat: '-32.56858123169629',
            lon: '-53.374974233408736',
        },
        underconstruction: 'Em Construção'
    },
    {
        name: 'Pad Bier Cervejaria',
        monument: 'Monumento 11',
        description:'Passaporte/Carimbo',
        address: 'Rod. Júlio Garcia - Paranoá, Brasília - DF',
        flag:'df',
        instagram: 'https://www.instagram.com/padbiercervejaria/?g=5',
        location: {
            lat: '-15.998823647782528',
            lon: '-47.56032846441805',
        },
        underconstruction: 'Construído',
    },
    {
        name: 'Centro Cultural Movimento',
        monument: 'Monumento 12',
        description:'Passaporte/Carimbo',
        address: 'R. João Leonardelli, 96, Socorro - SP, 13960-000',
        flag:'sp',
        instagram:'https://www.instagram.com/centroculturalmovimento/',
        location: {
            lat: '-22.59751010183526',
            lon: '-46.52584386476498',
        },
        underconstruction: 'Construído',
    },
    {
        name: 'Camping e Cabanas Portal dos Campos',
        monument: 'Monumento 13',
        description:'Passaporte/Carimbo',
        address: 'Estr. Pery Pereira Costa - Itaiacoca, Ponta Grossa - PR, 84110-000',
        flag:'pr',
        instagram: 'https://www.instagram.com/portal.dos.campos/',
        location: {
            lat: '-25.141989977627095',
            lon: '-49.981160664418056',
        },
        underconstruction: 'Construído',
    },
    {
        name: 'Parador 158',
        monument: 'Monumento 14',
        description:'Passaporte/Carimbo',
        address: 'BR 158 Km 308, n° 13325 Centro, Itaara - RS, 97185-000',
        flag:'rs',
        instagram:'https://www.instagram.com/parador158/',
        location: {
            lat: '-29.60089850647886',
            lon: '-53.76773625611631',
        },
        underconstruction: 'Construído',
    },
    {
        name: 'Garimpo em Atividade | Passeio Subterrâneo',
        monument: 'Monumento 15',
        description:'',
        address: 'Avenida Bento Gonçalves, 736, Ametista do Sul 98465-000',
        flag:'rs',
        instagram:'https://www.instagram.com/garimpoematividade/',
        location: {
            lat: '-27.357095498712173',
            lon: '-53.19022868387065',
        },
        underconstruction: 'Em Construção'
    },
    {
        name: 'Paranamanema - Bar & Restaurante Original Piraju',
        monument: 'Monumento 16',
        description:'Passaporte/Carimbo',
        address: 'Av. Dois - FECAPI, Piraju - SP, 18800-000',
        flag:'sp',
        instagram:'https://www.instagram.com/parador_paranapanema/',
        location: {
            lat: '-23.184228109612075',
            lon: '-49.39058729977387',
        },
        underconstruction: 'Construído'
    },
    {
        name: 'Pit Stop Canastra',
        monument: 'Monumento 17',
        description:'Passaporte',
        address: 'MJGV+4M - São Roque de Minas, MG, 37928-000',
        flag:'mg',
        instagram:'https://www.instagram.com/pit_stop_canastra/',
        location: {
            lat: '-20.324547712287572',
            lon: '-46.35569209146341',
        },
        underconstruction: 'Em Construção'
    },
    {
        name: 'Box 1200',
        monument: 'Monumento 18',
        description:'',
        address: 'Av. Luiz José Sereno, 1200 - Jardim Ermida II, Jundiaí - SP, 13212-210',
        flag:'sp',
        instagram:'https://www.instagram.com/box1200oficial/',
        location: {
            lat: '-23.19186879775487',
            lon: '-46.962882131356906',
        },
        underconstruction: 'Em Construção'
    },
    {
        name: 'Rancho Terra Crua',
        monument: 'Monumento 19',
        description:'',
        address: 'Estrada Servidão do Leme - Bairro da Capela Nova, Salesópolis - SP, 08970-000',
        flag:'sp',
        instagram:'https://www.instagram.com/rancho.terracrua/',
        location: {
            lat: '-23.521072880913053',
            lon: '-45.898423422327504',
        },
        underconstruction: 'Em Construção'
    }
]

const listMonument = document.querySelector(".listMonument")
addresses.forEach((address)=>{
    createTemplate(address)
})

function createTemplate(address){
    const section = document.createElement("section")
    const button = document.createElement("button")
    button.addEventListener("click", abrirNoGoogleMaps)
    button.innerText = "Calcular rota"
    button.id = address.monument.replace(" ", "-")
    button.setAttribute('data-endeco', address?.location?.lat?`${address?.location?.lat} ${address?.location?.lon}`: `${address.address}`)
    
    section.innerHTML = `
    <header>
    <h2>Parada: ${address.name}</h2>
    
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
        geocodeAddress(geocoder, map, address.address, address.instagram);
       
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
    addresses.forEach(address => {
       
        const option = document.createElement("option")
        option.value = address.flag
        option.innerText = address.flag.toUpperCase()
        select.appendChild(option)
       
    })

    select.addEventListener('change', function(e){
        listMonument.innerHTML = ''
        const value = e.target.value
        trackSelectCustomEvent(value)
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


    const filtro = document.querySelector("#filtro")

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
