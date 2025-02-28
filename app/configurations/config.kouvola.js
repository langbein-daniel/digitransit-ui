/* eslint-disable prefer-template */
import configMerger from '../util/configMerger';
import { BIKEAVL_WITHMAX } from '../util/citybikes';

const CONFIG = 'kouvola';
const APP_TITLE = 'Kouvolan reittiopas';
const APP_DESCRIPTION = 'Kouvolan reittiopas';

const walttiConfig = require('./config.waltti').default;

const minLat = 60.574886232976134;
const maxLat = 61.2909051236272;
const minLon = 26.230533247455586;
const maxLon = 27.424811201273982;

export default configMerger(walttiConfig, {
  CONFIG,

  appBarLink: {
    name: 'Kouvolan joukkoliikenne',
    href: 'http://www.kouvolanbussit.fi',
  },

  colors: {
    primary: '#000000',
    iconColors: {
      'mode-bus': '#000000',
      'mode-citybike': '#f2b62d',
    },
  },
  transportModes: {
    bus: {
      availableForSelection: true,
      defaultValue: true,
      nearYouLabel: {
        fi: 'Lähipysäkit kartalla',
        sv: 'Hållplatser på kartan',
        en: 'Nearby stops on map',
      },
    },
    citybike: {
      availableForSelection: true,
    },
  },

  cityBike: {
    networks: {
      donkey_kouvola: {
        enabled: true,
        season: {
          // 20.4. - 31.10.
          start: new Date(new Date().getFullYear(), 3, 20),
          end: new Date(new Date().getFullYear(), 10, 1),
        },
        capacity: BIKEAVL_WITHMAX,
        icon: 'citybike',
        name: {
          fi: 'Kouvola',
          sv: 'Kouvola',
          en: 'Kouvola',
        },
        type: 'citybike',
        url: {
          fi: 'https://kaakau.fi/kouvola/',
          sv: 'https://kaakau.fi/kouvola/?lang=sv',
          en: 'https://kaakau.fi/kouvola/?lang=en',
        },
        returnInstructions: {
          fi: 'https://kaakau.fi/ohjeet/pyoran-palauttaminen/',
          sv: 'https://kaakau.fi/ohjeet/pyoran-palauttaminen/',
          en: 'https://kaakau.fi/ohjeet/pyoran-palauttaminen/',
        },
      },
    },
  },

  socialMedia: {
    title: APP_TITLE,
    description: APP_DESCRIPTION,
    twitter: {
      site: '@kouvolakaupunki',
    },
  },

  title: APP_TITLE,

  // Navbar logo
  logo: 'kouvola/logo.png',
  secondaryLogo: 'kouvola/secondary-logo.png',

  favicon: './app/configurations/images/kouvola/favicon.png',

  feedIds: ['Kouvola'],

  searchParams: {
    'boundary.rect.min_lat': minLat,
    'boundary.rect.max_lat': maxLat,
    'boundary.rect.min_lon': minLon,
    'boundary.rect.max_lon': maxLon,
  },

  areaPolygon: [
    [minLon, minLat],
    [minLon, maxLat],
    [maxLon, maxLat],
    [maxLon, minLat],
  ],

  defaultEndpoint: {
    address: 'Matkakeskus, Kouvola',
    lat: 60.86625189966643,
    lon: 26.705328946745546,
  },

  vehicles: true,
  showVehiclesOnStopPage: true,
  showVehiclesOnSummaryPage: true,

  menu: {
    copyright: { label: `© Kouvola ${walttiConfig.YEAR}` },
    content: [
      {
        name: 'menu-feedback',
        href: {
          fi:
            'https://kartta.kouvola.fi/eFeedback/fi/Feedback/34-Joukkoliikenne',
          sv:
            'https://kartta.kouvola.fi/eFeedback/fi/Feedback/34-Joukkoliikenne',
          en:
            'https://kartta.kouvola.fi/eFeedback/en/Feedback/34-Joukkoliikenne',
        },
      },
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
          'Tämän palvelun tarjoaa Kouvolan kaupungin joukkoliikenne reittisuunnittelua varten Kouvolan alueella. Palvelu kattaa joukkoliikenteen, kävelyn, pyöräilyn ja yksityisautoilun rajatuilta osin. Palvelu perustuu Digitransit-palvelualustaan.',
        ],
      },
      {
        header: 'Digitransit-palvelualusta',
        paragraphs: [
          'Digitransit-palvelualusta on HSL:n ja Traficomin kehittämä avoimen lähdekoodin reititystuote.',
        ],
      },
      {
        header: 'Tietolähteet',
        paragraphs: [
          'Kartat, tiedot kaduista, rakennuksista, pysäkkien sijainnista ynnä muusta tarjoaa © OpenStreetMap contributors. Osoitetiedot tuodaan Digi- ja väestötietoviraston rakennustietorekisteristä. Joukkoliikenteen reitit ja aikataulut perustuvat Kouvolan tuottamaan GTFS-aineistoon.',
        ],
      },
    ],

    sv: [
      {
        header: 'Om tjänsten',
        paragraphs: [
          'Den här tjänsten erbjuds av Kouvola för reseplanering inom Kouvola region. Reseplaneraren täcker med vissa begränsningar kollektivtrafik, promenad, cykling samt privatbilism. Tjänsten baserar sig på Digitransit-plattformen.',
        ],
      },
      {
        header: 'Digitransit-plattformen',
        paragraphs: [
          'Digitransit-plattformen är en öppen programvara utvecklad av HRT och Traficom.',
        ],
      },
      {
        header: 'Datakällor',
        paragraphs: [
          'Kartor, gator, byggnader, hållplatser och dylik information erbjuds av © OpenStreetMap contributors. Addressinformation hämtas från BRC:s byggnadsinformationsregister. Kollektivtrafikens rutter och tidtabeller är baserad på Kouvolas GTFS data.',
        ],
      },
    ],

    en: [
      {
        header: 'About this service',
        paragraphs: [
          'This service is provided by Kouvola city for local route planning in Kouvola region. The service covers public transport, walking, cycling, and some private car use. Service is built on Digitransit platform.',
        ],
      },
      {
        header: 'Digitransit platform',
        paragraphs: [
          'The Digitransit service platform is an open source routing platform developed by HSL and Traficom.',
        ],
      },
      {
        header: 'Data sources',
        paragraphs: [
          'Maps, streets, buildings, stop locations etc. are provided by © OpenStreetMap contributors. Address data is retrieved from the Building and Dwelling Register of the Finnish Population Register Center. Public transport routes and timetables are based on GTFS data produced by Kouvola city.',
        ],
      },
    ],
  },
  zoneIdMapping: {
    1: 'A',
    2: 'B',
  },
  zones: {
    stops: true,
    itinerary: true,
  },
});
