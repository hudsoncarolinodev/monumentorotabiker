/**
 * Dados centralizados dos monumentos da Rota Biker
 * Usado pelo mapa e pelo build de páginas SEO
 */
import { slugify } from './utils/slugify.js';

const MONUMENTOS_RAW = [
  {
    name: 'Serpenteando Café',
    monument: 'Monumento 1',
    description: 'Passaporte/Carimbo',
    address: 'Estr. Da Ribeira, km 71, Bocaiúva do Sul - PR, 83450-000',
    flag: 'pr',
    instagram: 'https://www.instagram.com/serpenteando.cafe/',
    location: { lat: '-25.07765438720003', lon: '-49.086307360061866' },
    underconstruction: 'Construído',
    city: 'Bocaiúva do Sul',
    route: 'Rastro da Serpente',
  },
  {
    name: 'Panda Mechanics',
    monument: 'Monumento 2',
    description: 'Passaporte/Carimbo',
    address: 'Av. Com. Franco, 4387 - Uberaba, Curitiba - PR, 81530-440',
    flag: 'pr',
    instagram: 'https://www.instagram.com/pandamechanics/',
    location: { lat: '-25.469752011034366', lon: '-49.23041471813094' },
    underconstruction: 'Construído',
    city: 'Curitiba',
    route: 'Rota 090',
  },
  {
    name: 'Mirante 12',
    monument: 'Monumento 3',
    description: 'Passaporte/Carimbo',
    address: 'Estrada geral, SC-390, km 12, Lauro Müller - SC, 88880-000',
    flag: 'sc',
    instagram: 'https://www.instagram.com/mirantedo12/',
    location: { lat: '-28.38481783793182', lon: '-49.485074181599536' },
    underconstruction: 'Construído',
    city: 'Lauro Müller',
    route: 'Serra do Rio do Rastro',
  },
  {
    name: 'Rota 370',
    monument: 'Monumento 4',
    description: 'Passaporte/Carimbo',
    address: 'SC-370 - Urubici, SC, 88650-000',
    flag: 'sc',
    instagram: 'https://www.instagram.com/rota370urubici/',
    location: { lat: '-27.998621009965447', lon: '-49.554484318281325' },
    underconstruction: 'Construído',
    city: 'Urubici',
    route: 'Rota 370',
  },
  {
    name: 'Rota PR 218',
    monument: 'Monumento 5',
    description: 'Passaporte/Carimbo',
    address: 'R. Benedito Salles, 2671 - Carlópolis, PR, 86420-000',
    flag: 'pr',
    instagram: 'https://www.instagram.com/rotapr218/',
    location: { lat: '-23.419699777783975', lon: '-49.70876704414918' },
    underconstruction: 'Construído',
    city: 'Carlópolis',
    route: 'Rota PR-218',
  },
  {
    name: 'Rota Bike Café',
    monument: 'Monumento 6',
    description: 'Passaporte/Carimbo',
    address: 'Estr. Geral Rio Milanês - Cedro Alto, Rio dos Cedros - SC, 89121-000',
    flag: 'sc',
    instagram: 'https://www.instagram.com/rotabikecafe/',
    location: { lat: '-26.672052483667084', lon: '-49.32140163583835' },
    underconstruction: 'Construído',
    city: 'Rio dos Cedros',
    route: 'Circuito Vale Europeu',
  },
  {
    name: 'Container da Serra',
    monument: 'Monumento 7',
    description: 'Passaporte/Carimbo',
    address: 'SC-477 - São João da Esperança, Dr. Pedrinho - SC, 89126-000',
    flag: 'sc',
    instagram: 'https://www.instagram.com/containerdaserra/',
    location: { lat: '-26.625422574122982', lon: '-49.51658913206693' },
    underconstruction: 'Construído',
    city: 'Dr. Pedrinho',
    route: 'Circuito Vale Europeu',
  },
  {
    name: '261',
    monument: 'Monumento 8',
    description: 'Passaporte/Carimbo',
    address: 'R. Avelino Domingues Menk, 114 - Centro, Guapiara - SP, 18310-000',
    flag: 'sp',
    instagram: 'https://www.instagram.com/parada_261/',
    location: { lat: '-24.18979485759995', lon: '-48.536707597604085' },
    underconstruction: 'Construído',
    city: 'Guapiara',
    route: 'Rastro da Serpente',
  },
  {
    name: 'Posto Rota 090',
    monument: 'Monumento 9',
    description: 'Passaporte/Carimbo',
    address: 'PR-090, 147 - Km 147, Piraí do Sul - PR, 84240-000',
    flag: 'pr',
    instagram: 'https://www.instagram.com/rota090/',
    location: { lat: '-24.53785525770189', lon: '-49.95786054160373' },
    underconstruction: 'Construído',
    city: 'Piraí do Sul',
    route: 'Rota 090',
  },
  {
    name: 'Município de Jaguarão-RS',
    monument: 'Monumento 10',
    description: '',
    address: 'Av. 20 de Setembro, 401-303, Jaguarão - RS, 96300-000',
    flag: 'rs',
    instagram: 'https://www.instagram.com/p/C4YEyZ8OhXW/?locale=en_GB%2Cen_GB',
    location: { lat: '-32.56858123169629', lon: '-53.374974233408736' },
    underconstruction: 'Em Construção',
    city: 'Jaguarão',
    route: 'Circuito Sul-Sudeste',
  },
  {
    name: 'Pad Bier Cervejaria',
    monument: 'Monumento 11',
    description: 'Passaporte/Carimbo',
    address: 'Rod. Júlio Garcia - Paranoá, Brasília - DF',
    flag: 'df',
    instagram: 'https://www.instagram.com/padbiercervejaria/?g=5',
    location: { lat: '-15.998823647782528', lon: '-47.56032846441805' },
    underconstruction: 'Construído',
    city: 'Brasília',
    route: 'Centro-Oeste',
  },
  {
    name: 'Centro Cultural Movimento',
    monument: 'Monumento 12',
    description: 'Passaporte/Carimbo',
    address: 'R. João Leonardelli, 96, Socorro - SP, 13960-000',
    flag: 'sp',
    instagram: 'https://www.instagram.com/centroculturalmovimento/',
    location: { lat: '-22.59751010183526', lon: '-46.52584386476498' },
    underconstruction: 'Construído',
    city: 'Socorro',
    route: 'Circuito das Águas Paulista',
  },
  {
    name: 'Camping e Cabanas Portal dos Campos',
    monument: 'Monumento 13',
    description: 'Passaporte/Carimbo',
    address: 'Estr. Pery Pereira Costa - Itaiacoca, Ponta Grossa - PR, 84110-000',
    flag: 'pr',
    instagram: 'https://www.instagram.com/portal.dos.campos/',
    location: { lat: '-25.141989977627095', lon: '-49.981160664418056' },
    underconstruction: 'Construído',
    city: 'Ponta Grossa',
    route: 'Rastro da Serpente',
  },
  {
    name: 'Parador 158',
    monument: 'Monumento 14',
    description: 'Passaporte/Carimbo',
    address: 'BR 158 Km 308, n° 13325 Centro, Itaara - RS, 97185-000',
    flag: 'rs',
    instagram: 'https://www.instagram.com/parador158/',
    location: { lat: '-29.60089850647886', lon: '-53.76773625611631' },
    underconstruction: 'Construído',
    city: 'Itaara',
    route: 'BR-158',
  },
  {
    name: 'Garimpo em Atividade | Passeio Subterrâneo',
    monument: 'Monumento 15',
    description: '',
    address: 'Avenida Bento Gonçalves, 736, Ametista do Sul 98465-000',
    flag: 'rs',
    instagram: 'https://www.instagram.com/garimpoematividade/',
    location: { lat: '-27.357095498712173', lon: '-53.19022868387065' },
    underconstruction: 'Em Construção',
    city: 'Ametista do Sul',
    route: 'Rota das Pedras',
  },
  {
    name: 'Parador Paranamanema - Bar & Restaurante Original Piraju',
    monument: 'Monumento 16',
    description: 'Passaporte/Carimbo',
    address: 'Av. Dois - FECAPI, Piraju - SP, 18800-000',
    flag: 'sp',
    instagram: 'https://www.instagram.com/baroriginalpiraju/',
    location: { lat: '-23.184228109612075', lon: '-49.39058729977387' },
    underconstruction: 'Construído',
    city: 'Piraju',
    route: 'Rota das Serras Paulistas',
  },
  {
    name: 'Pit Stop Canastra',
    monument: 'Monumento 17',
    description: 'Passaporte',
    address: 'MJGV+4M - São Roque de Minas, MG, 37928-000',
    flag: 'mg',
    instagram: 'https://www.instagram.com/pit_stop_canastra/',
    location: { lat: '-20.324547712287572', lon: '-46.35569209146341' },
    underconstruction: 'Em Construção',
    city: 'São Roque de Minas',
    route: 'Serra da Canastra',
  },
  {
    name: 'Box 1200',
    monument: 'Monumento 18',
    description: '',
    address: 'Av José Luiz Sereno, 1200 - Jundiaí 13212210',
    flag: 'sp',
    instagram: 'https://www.instagram.com/box1200oficial/',
    location: { lat: '-23.191867612172500', lon: '-46.96288362459640' },
    underconstruction: 'Em Construção',
    city: 'Jundiaí',
    route: 'Serras Paulistas',
  },
  {
    name: 'Rancho Terra Crua',
    monument: 'Monumento 19',
    description: '',
    address: 'Estrada Servidão do Leme, 330 - Salesópolis 08970000',
    flag: 'sp',
    instagram: 'https://www.instagram.com/rancho.terracrua/',
    location: { lat: '-23.521152325011', lon: '-45.89842861630158' },
    underconstruction: 'Em Construção',
    city: 'Salesópolis',
    route: 'Rota das Serras Paulistas',
  },
];

const ESTADO_NOME = {
  pr: 'Paraná',
  sc: 'Santa Catarina',
  sp: 'São Paulo',
  rs: 'Rio Grande do Sul',
  mg: 'Minas Gerais',
  df: 'Distrito Federal',
};

const ROTAS_DESCRICAO = {
  'Rastro da Serpente':
    'Possivelmente a rota mais emblemática para motociclistas no Brasil, com trechos sinuosos e mirantes espetaculares. Abriga diversos monumentos entre Paraná e São Paulo.',
  'Serra do Rio do Rastro':
    'Parada estratégica em um dos trechos mais sinuosos do país, na Serra Catarinense. Paisagens deslumbrantes e curvas desafiadoras.',
  'Rota 370':
    'Conhecida pelas paisagens montanhosas e pelo clima ameno. Urubici é considerada o coração do motociclismo em Santa Catarina.',
  'Rota PR-218':
    'Ponto de destaque na região norte paranaense, próximo à divisa com São Paulo.',
  'Circuito Vale Europeu':
    'Região que alia gastronomia e cultura local ao motociclismo. Parada obrigatória para quem busca experiências autênticas.',
  'Rota 090':
    'Ligação importante para quem vem de Curitiba em direção ao interior sul do Paraná.',
  'Circuito Sul-Sudeste':
    'Malha de monumentos que conecta diferentes estados do Sul e Sudeste.',
  'Centro-Oeste':
    'Monumentos no coração do Brasil, no Distrito Federal.',
  'Circuito das Águas Paulista':
    'Região turística de Minas e São Paulo com águas termais e belas paisagens.',
  'BR-158':
    'Rodovia federal que corta o Rio Grande do Sul, importante eixo para mototurismo.',
  'Rota das Pedras':
    'Circuito que inclui Ametista do Sul e outras atrações da região das pedras preciosas.',
  'Rota das Serras Paulistas':
    'Serras e curvas no interior de São Paulo.',
  'Serra da Canastra':
    'Um dos destinos mais procurados por motociclistas em Minas Gerais, famosa pelo queijo.',
  'Serras Paulistas':
    'Curvas e paisagens no estado de São Paulo.',
};

function addSlugs(list) {
  return list.map((item) => ({
    ...item,
    slug: slugify(item.name),
    citySlug: slugify(item.city),
    routeSlug: slugify(item.route),
  }));
}

export const monumentos = addSlugs(MONUMENTOS_RAW);

export function getAddressesForMap() {
  return monumentos.map(
    ({ name, monument, description, address, flag, instagram, location, underconstruction }) => ({
      name,
      monument,
      description,
      address,
      flag,
      instagram,
      location,
      underconstruction,
    })
  );
}

export function getMonumentBySlug(slug) {
  return monumentos.find((m) => m.slug === slug);
}

export function getMonumentsByCity(citySlug) {
  return monumentos.filter((m) => m.citySlug === citySlug);
}

export function getMonumentsByRoute(routeSlug) {
  return monumentos.filter((m) => m.routeSlug === routeSlug);
}

export function getUniqueCities() {
  const seen = new Set();
  return monumentos
    .filter((m) => {
      if (seen.has(m.citySlug)) return false;
      seen.add(m.citySlug);
      return true;
    })
    .map((m) => ({ name: m.city, slug: m.citySlug, state: m.flag }));
}

export function getUniqueRoutes() {
  const seen = new Set();
  return monumentos
    .filter((m) => {
      if (seen.has(m.routeSlug)) return false;
      seen.add(m.routeSlug);
      return true;
    })
    .map((m) => ({ name: m.route, slug: m.routeSlug }));
}

export { ESTADO_NOME, ROTAS_DESCRICAO };
