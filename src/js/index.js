import mapStyle from './styleMap.js'

const addresses = [
    {
        name: 'Serpenteando Café',
        monument: 'Monumento 1',
        description:'BR-476, KM 71, Rastro da Serpente, Bocaiúva do Sul (Passaporte/Carimbo)',
        address: 'Estr. Da Ribeira, km 71, Bocaiúva do Sul - PR, 83450-000',
        flag:'pr',
        instagram: 'https://www.instagram.com/serpenteando.cafe/',
        location: {
            lat: '-25.0777701',
            lon: '-49.0888728',
        }
    },
    {
        name: 'Panda Mechanics',
        monument: 'Monumento 2',
        description:'BR-476, KM 71, Rastro da Serpente, Bocaiúva do Sul (Passaporte/Carimbo)',
        address: 'Rua Francisco Castellano, 135 - sob 3 - Jardim das Américas, Curitiba - PR, 81540-370',
        flag:'pr',
        instagram: 'https://www.instagram.com/pandamechanics/',
        location: {
            lat: '-25.467527',
            lon: '-49.2296066',
        }
    },
    {
        name: 'Mirante 12',
        monument: 'Monumento 3',
        description:'BR-476, KM 71, Rastro da Serpente, Bocaiúva do Sul (Passaporte/Carimbo)',
        address: 'Estrada geral, SC-390, km 12, Lauro Müller - SC, 88880-000',
        flag:'sc',
        instagram: 'https://www.instagram.com/mirantedo12/',
        location: {
            lat: '-28.3858153',
            lon: '-49.6376082',
        }
    },
    {
        name: 'Rota 370 Urubici',
        monument: 'Monumento 4',
        description:'BR-476, KM 71, Rastro da Serpente, Bocaiúva do Sul (Passaporte/Carimbo)',
        address: 'SC-370 - Urubici, SC, 88650-000',
        flag:'sc',
        instagram: 'https://www.instagram.com/rota370urubici/',
        location: {
            lat: null,
            lon: null,
        }
    },
    {
        name: 'Rota PR 218',
        monument: 'Monumento 5',
        description:'BR-476, KM 71, Rastro da Serpente, Bocaiúva do Sul (Passaporte/Carimbo)',
        address: 'R. Benedito Salles, 2671 - Carlópolis, PR, 86420-000',
        flag:'pr',
        instagram: 'https://www.instagram.com/rotapr218/'
    },
    {
        name: 'Rota Bike Café',
        monument: 'Monumento 6',
        description:'BR-476, KM 71, Rastro da Serpente, Bocaiúva do Sul (Passaporte/Carimbo)',
        address: 'Estrada. Geral Rio Milanês - Cedro Alto, Rio dos Cedros - SC, 89121-000',
        flag:'sc',
        instagram: 'https://www.instagram.com/rotabikecafe/'
    },
    {
        name: 'Container da Serra',
        monument: 'Monumento 7',
        description:'SC-477 - São João da Esperança, Dr. Pedrinho - SC, 89126-000',
        address: 'Estrada. Geral Rio Milanês - Cedro Alto, Rio dos Cedros - SC, 89121-000',
        flag:'sc',
        instagram: 'https://www.instagram.com/containerdaserra/'
    },
    {
        name: '261',
        monument: 'Monumento 8',
        description:'SC-477 - São João da Esperança, Dr. Pedrinho - SC, 89126-000',
        address: 'R. Avelino Domingues Menk, 114 - Centro, Guapiara - SP, 18310-000',
        flag:'sp',
        instagram: 'https://www.instagram.com/parada_261/'
    },
    {
        name: 'Posto Rota 090',
        monument: 'Monumento 9',
        description:'SC-477 - São João da Esperança, Dr. Pedrinho - SC, 89126-000',
        address: 'PR-090, 147 - Km 147, Piraí do Sul - PR, 84240-000',
        flag:'pr',
        instagram: 'https://www.instagram.com/rota090/'
    },
    {
        name: 'Município de Jaguarão-RS',
        monument: 'Monumento 10',
        description:'As margens do Rio Jaguarão entre a prefeitura local, Terra Sul Motos',
        address: 'Av. Vinte e Sete de Janeiro, 422 - Centro, Jaguarão - RS, 96300-000',
        flag:'rs',
        instagram: 'https://www.instagram.com/p/C4YEyZ8OhXW/?locale=en_GB%2Cen_GB'
    },
    {
        name: 'Pag Bier Cervejaria',
        monument: 'Monumento 11',
        description:'As margens do Rio Jaguarão entre a prefeitura local, Terra Sul Motos',
        address: 'Rod. Júlio Garcia - Paranoá, Brasília - DF',
        flag:'df',
        instagram: 'https://www.instagram.com/padbiercervejaria/?g=5'
    },
    {
        name: 'Pit Stop Canastra',
        monument: 'Monumento 12',
        description:'As margens do Rio Jaguarão entre a prefeitura local, Terra Sul Motos',
        address: 'MJGV+4M - São Roque de Minas, MG, 37928-000',
        flag:'mg',
        instagram:'https://www.instagram.com/pitstopcanastra/'
    },
    {
        name: 'Camping e Cabanas Portal dos Campos',
        monument: 'Monumento 13',
        description:'As margens do Rio Jaguarão entre a prefeitura local, Terra Sul Motos',
        address: 'Estrada Pery Pereira Costa - Itaiacoca, Ponta Grossa - PR, 84110-000',
        flag:'pr',
        instagram: 'https://www.instagram.com/portal.dos.campos/'
    },
    {
        name: 'Parador 158',
        monument: 'Monumento 14',
        description:'As margens do Rio Jaguarão entre a prefeitura local, Terra Sul Motos',
        address: 'BR 158 Km 308, n° 13325 Centro, Itaara - RS, 97185-000',
        flag:'rs',
        instagram:'https://www.instagram.com/parador158/'
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
            <p><strong>Monumento:</strong> ${address.monument}</p>
            <p hidden><strong>Descrição:</strong> ${address.description}</p>
            <p><strong>Endereço:</strong> ${address.address}</p>
            <p><a class="instagram" title="${address.monument}" target="_blank" href="${address.instagram}">Instagram <img src="./src/img/instagram.png" alt="Instagram"></a><p>
            <p><a class="instagramRotaBiker" target="_blank" href="https://www.instagram.com/rota_biker/">Instagram oficial Rota Biker <img src="./src/img/instagram.png" alt="Instagram"></a><p>
        `
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
    const value = e.target.value.toLowerCase()
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
