/* eslint-disable prefer-template */
import configMerger from '../util/configMerger';
import { BIKEAVL_WITHMAX } from '../util/citybikes';

const CONFIG = 'lappeenranta';
const APP_TITLE = 'reittiopas.lappeenranta.fi';
const APP_DESCRIPTION = '';

const walttiConfig = require('./config.waltti').default;

export default configMerger(walttiConfig, {
  CONFIG,

  appBarLink: { name: 'Lappeenranta', href: 'http://www.lappeenranta.fi/' },

  colors: {
    primary: '#ea4097',
    iconColors: {
      'mode-bus': '#ea4097',
    },
  },

  socialMedia: {
    title: APP_TITLE,
    description: APP_DESCRIPTION,
  },

  title: APP_TITLE,

  logo: 'lappeenranta/logo.png',
  secondaryLogo: 'lappeenranta/secondary-logo.png',

  favicon: './app/configurations/images/lappeenranta/bussi_fin.jpeg',

  cityBike: {
    networks: {
      donkey_lappeenranta: {
        enabled: true,
        season: {
          // 1.4. - 30.11. TODO uncertain end date depends on weather
          start: new Date(new Date().getFullYear(), 3, 1),
          end: new Date(new Date().getFullYear(), 11, 1),
        },
        capacity: BIKEAVL_WITHMAX,
        icon: 'citybike',
        name: {
          fi: 'Lappeenranta',
          sv: 'Vilmanstrand',
          en: 'Lappeenranta',
        },
        type: 'citybike',
        url: {
          fi: 'https://kaakau.fi/lappeenranta/',
          sv: 'https://kaakau.fi/lappeenranta/?lang=sv',
          en: 'https://kaakau.fi/lappeenranta/?lang=en',
        },
      },
    },
  },

  transportModes: {
    citybike: {
      availableForSelection: true,
    },
  },

  feedIds: ['Lappeenranta'],

  searchParams: {
    'boundary.rect.min_lat': 61.016901,
    'boundary.rect.max_lat': 61.102794,
    'boundary.rect.min_lon': 28.030938,
    'boundary.rect.max_lon': 28.329905,
  },

  areaPolygon: [
    [28.031, 61.017],
    [28.031, 61.1028],
    [28.33, 61.1028],
    [28.33, 61.017],
  ],

  defaultEndpoint: {
    address: 'Oleksin ja Koulukadun risteys',
    lat: 61.059097,
    lon: 28.18572,
  },

  vehicles: true,
  showVehiclesOnStopPage: true,
  showVehiclesOnSummaryPage: true,

  menu: {
    copyright: { label: `© Lappeenranta ${walttiConfig.YEAR}` },
    content: [
      {
        name: 'about-this-service',
        route: '/tietoja-palvelusta',
      },
      {
        name: 'accessibility-statement',
        href: {
          fi: 'https://www.digitransit.fi/accessibility',
          sv: 'https://www.digitransit.fi/accessibility',
          en: 'https://www.digitransit.fi/en/accessibility',
        },
      },
    ],
  },

  aboutThisService: {
    fi: [
      {
        header: 'Tietoja palvelusta',
        paragraphs: [
          'Tämän palvelun tarjoaa Lappeenrannan kaupungin joukkoliikenne joukkoliikenteen reittisuunnittelua varten Lappeenrannan paikallisliikenteen alueella. Palvelu perustuu Digitransit-palvelualustaan.',
        ],
      },
    ],

    sv: [
      {
        header: 'Om tjänsten',
        paragraphs: [
          'Den här tjänsten erbjuds av Lappeenrannan kaupungin joukkoliikenne för lokal reseplanering inom Lappeenranta region. Reseplaneraren täcker med vissa begränsningar kollektivtrafik, promenad, cykling samt privatbilism. Tjänsten baserar sig på Digitransit-plattformen.',
        ],
      },
    ],

    en: [
      {
        header: 'About this service',
        paragraphs: [
          'This service is provided by Lappeenrannan kaupungin joukkoliikenne for local route planning in Lappenranta region. The service covers public transport, walking, cycling, and some private car use. Service is built on Digitransit platform.',
        ],
      },
    ],
  },
  zoneIdMapping: {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
  },
  zones: {
    stops: true,
    itinerary: true,
  },
  geoJson: {
    layers: [
      {
        name: {
          fi: 'Pyöräilyreitit',
          sv: 'Cykelrutter',
          en: 'Bike routes',
        },
        url: 'https://ckanlpr.meitademo.fi/geojson/pyorailyreitit_lpr.geojson',
        isOffByDefault: true,
      },
      {
        name: {
          fi: 'Vyöhykkeet',
          sv: 'Zoner',
          en: 'Zones',
        },
        url: '/assets/geojson/lpr_zone_lines_20220113.geojson',
      },
    ],
  },
});
