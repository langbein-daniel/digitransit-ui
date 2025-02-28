const CONFIG = 'btp';
const APP_TITLE = 'BikeTripPlanner';
const APP_DESCRIPTION = 'Plan trips with bike & transit';
const YEAR = 1900 + new Date().getYear();
// String array containing HTML code.
// Can be passed through environment variable in the form of a JSON array.
const DATA_SOURCES_PARAGRAPHS = (process.env.DATA_SOURCES_PARAGRAPHS &&
  JSON.parse(process.env.DATA_SOURCES_PARAGRAPHS)) || [
  "Maps, streets, buildings, bike lockers, stop locations, etc. are provided by OpenStreetMap contributors. Address data is retrieved from Who's On First. Public transport routes and timetables are downloaded from the VGN.",
];

const timezone = process.env.TIMEZONE || 'Europe/Berlin';

const DEFAULT_MAP_URL =
  process.env.DEFAULT_MAP_URL || 'http://localhost:7070/styles/bicycle/';
const STOP_MAP_URL =
  process.env.STOP_MAP_URL ||
  'http://localhost:8080/otp/routers/default/vectorTiles/stops,stations/';
const OTP_TIMEOUT = parseInt(process.env.OTP_TIMEOUT, 10) || 20000;

const MIN_LAT = parseFloat(process.env.MIN_LAT) || 48.70792025947608;
const MAX_LAT = parseFloat(process.env.MAX_LAT) || 50.25793688217101;
const MIN_LON = parseFloat(process.env.MIN_LON) || 10.011636032586688;
const MAX_LON = parseFloat(process.env.MAX_LON) || 12.223993889052613;

const MIN_ZOOM = process.env.MIN_ZOOM || 9;

// Center
const lat = 0.5 * (MIN_LAT + MAX_LAT);
const lon = 0.5 * (MIN_LON + MAX_LON);

const copyrightText = `© Daniel Langbein ${YEAR}`;

export default {
  // This is required e.g. for favicon generation during `yarn build`.
  CONFIG,

  YEAR,

  // In milliseconds.
  // - https://github.com/HSLdevcom/digitransit-ui/commit/da6890e3c8abc880b391190b734d5d56384f7ffd#diff-d578a4a1cccbfcf5001962e74b1c2faad229fbe727ba8d3beecaec621e5faafcR104
  // - https://github.com/relay-tools/react-relay-network-modern/blob/bf0b16f7a008bdaf72e97a92eeddf9ee4d2d7a38/src/middlewares/retry.js#L51
  // - https://github.com/relay-tools/react-relay-network-modern/blob/bf0b16f7a008bdaf72e97a92eeddf9ee4d2d7a38/src/middlewares/retry.js#L77
  OTPTimeout: OTP_TIMEOUT,

  // Transit Feed IDs
  // - OpenTripPlanner -> Give GTFS import the ID "1"
  // - Pelias GTFS import -> Use the prefix "1"
  feedIds: ['1'],

  URL: {
    MAP: {
      // https://github.com/HSLdevcom/digitransit-ui/blob/eecdbb38a5d9108ea07d47d4ec6bb43fd4e2b15d/app/component/map/Map.js#L216
      // The base URL with tailing slash (excluding xyz and size parameter).
      // https://localhost/styles/bicycle/{z}/{x}/{y}{size}.png
      default: DEFAULT_MAP_URL,
    },
    STOP_MAP: {
      // The base URL with tailing slash (excluding xyz parameter).
      // http://localhost:8080/otp/routers/default/vectorTiles/stops,stations/{z}/{x}/{y}.pbf
      default: STOP_MAP_URL,
    },
  },

  // TODO: The "Cookie settings" button does not work as `renew` is undefined. See `window.CookieConsent.renew`.
  //
  // Mobile-view: Bottom right button "Cookie settings"
  // useCookiesPrompt: true,
  // Mobile-view: Bottom left text
  // copyrightText,

  // Limit the available languages in `MainMenu.js`.
  availableLanguages: ['en', 'de'],

  timezone,

  showWeatherInformation: false,

  availableTickets: {},
  showTicketSelector: false,

  showBikeAndPublicItineraries: true,
  // If disabled, one can't enable the "bike & ride" and "bike and transit" modes.
  // However, `includePublicWithBikePlan` overrides this setting.
  showBikeAndParkItineraries: true,

  includeBikeSuggestions: true,
  includeCarSuggestions: true,

  // Same as the setting after, but for bikes ? TODO
  includeParkAndRideSuggestions: false,
  // "bike & ride" and "bike & transit" modes are always enabled.
  // Therefore, the "park and ride" switch disappears from the bike settings.
  //
  includePublicWithBikePlan: true,

  // If there shall be two switches in settings:
  // - One switch "Park and Ride" that toggles "bike & ride" and "bike & transit" suggestions
  // - Another switch to toggle car suggestions
  //
  // The "Park and Ride" switch in the "Bike" settings is only shown
  // if both showBikeAndPublicItineraries and showBikeAndParkItineraries
  // are true.
  separatedParkAndRideSwitch: true,

  // Control what transport modes that should be possible to select in the UI
  // and whether the transport mode is used in trip planning by default.
  //
  // If availableForSelection or defaultValue is false, then the transportMode is not used for trip planning.
  transportModes: {
    funicular: {
      availableForSelection: true,
      defaultValue: true,
    },

    // Controls the BICYCLE_RENT OTP mode. See "modeToOTP" in config.default.js
    citybike: {
      availableForSelection: false,
      defaultValue: false, // always false
    },
  },

  // TODO: GTFS-RT required?
  vehicles: false,
  showVehiclesOnStopPage: true,
  showVehiclesOnSummaryPage: true,

  // TODO: Missing in GTFS feed of VGN
  //
  // https://developers.google.com/transit/gtfs/reference#stopstxt
  // - Identifies the fare zone for a stop. This field is required if providing fare information using fare_rules.txt, otherwise it is optional.
  //
  // See schema.graphql Stop zoneid "ID of the zone where this stop is located"
  // See legUtils.js getZoneLabel
  zones: {
    stops: false,
    itinerary: false,
  },

  appBarLink: {
    name: 'BikeTripPlanner',
    href: `https://github.com/langbein-daniel/BikeTripPlanner`,
  },

  // mergeStopsByCode: true,

  // See also: app/configurations/btp/favicon.svg -> fill color
  // TODO: How to change the color of the bus-tram double icon?
  // TODO: The following has no effect: search-bustram-stop-digitransit.svg -> BUS and TRAM fill color
  // See also: sass/themes/btp/_theme.scss -> $primary-color
  colors: {
    primary: '#24a727',
    hover: '#1a7c1c', // secondary
    iconColors: {
      'mode-airplane': '#48d1ff',
      'mode-bus': '#c21824',
      'mode-bus-express': '#c21824', // bus
      'mode-bus-local': '#c21824', // bus
      'mode-tram': '#820d86',
      'mode-metro': '#2e5ea2',
      'mode-rail': '#6d984f',
      'mode-ferry': '#ee992c',
      'mode-ferry-pier': '#ee992c', // ferry
      'mode-funicular': '#e91dbe',
      'mode-citybike': '#24a727', // primary
      'mode-citybike-secondary': '#24a727', // primary
    },
  },

  socialMedia: {
    title: APP_TITLE,
    description: APP_DESCRIPTION,
  },
  meta: {
    description: APP_DESCRIPTION,
  },
  title: APP_TITLE,

  textLogo: false,
  // .svg or .png navbar logo
  logo: `${CONFIG}/${CONFIG}-logo.png`,

  favicon: `./app/configurations/images/${CONFIG}/favicon.png`,

  // by default use only `osm` source of geocoder (Pelias), and not the `gtfs` source (stops and stations)
  searchSources: ['osm'],
  // Not required if "park & ride" is disabled.
  // parkingAreaSources: ['liipi'],

  // Use this if you have a rectangular areaPolygon.
  searchParams: {
    'boundary.rect.min_lat': MIN_LAT,
    'boundary.rect.max_lat': MAX_LAT,
    'boundary.rect.min_lon': MIN_LON,
    'boundary.rect.max_lon': MAX_LON,
  },
  // Use this if you have a non-rectangular areaPolygon.
  //
  // This results in
  //   config.searchParams['boundary.polygon'] = pointsParam;
  // where pointsParam is created from config.areaPolygon
  // useSearchPolygon: true,

  areaPolygon: [
    [MIN_LON, MIN_LAT],
    [MIN_LON, MAX_LAT],
    [MAX_LON, MAX_LAT],
    [MAX_LON, MIN_LAT],
  ],

  defaultEndpoint: {
    lat,
    lon,
  },

  // Note: Based on config.hsl.js
  map: {
    minZoom: MIN_ZOOM,

    // showZoomControl: true,
    // showLayerSelector: true,
    showStopMarkerPopupOnMobile: false,
    // showScaleBar: true,

    // TODO
    // attribution:
    //   '<a tabindex="-1" href="http://osm.org/copyright">© OpenStreetMap</a>',

    // AreBounds is for keeping map and user inside given area.
    areaBounds: {
      corner1: [MAX_LAT, MAX_LON],
      corner2: [MIN_LAT, MIN_LON],
    },
  },

  mainMenu: {
    // Whether to show the top right menu button at all
    // show: true,
    showDisruptions: false,
    showLoginCreateAccount: false,
    // This option is not used anywhere.
    showOffCanvasList: true,
    // Independent of this option one can also return to the front page by closing the menu.
    showFrontPageLink: false,
    // If true, one can generate the URL of a virtual stop monitor that displays the upcoming departures.
    // Example: https://matkamonitori.digitransit.fi/createview
    // Requires an instance of https://github.com/HSLdevcom/digitransit-virtualmonitor
    stopMonitor: {
      show: false,
      // url: 'https://my-digitransit-url/createview',
    },
    // If true, one can generate and copy HTML iframe code from the menu ("Create a route search element").
    showEmbeddedSearch: false,
  },

  menu: {
    copyright: { label: copyrightText },
    content: [
      {
        name: 'menu-feedback',
        href: {
          en: 'https://github.com/langbein-daniel/BikeTripPlanner/issues',
          de: 'https://github.com/langbein-daniel/BikeTripPlanner/issues',
        },
      },
      {
        name: 'about-this-service',
        // Loads config.aboutThisService[currentLanguage]
        route: '/tietoja-palvelusta',
      },
    ],
  },

  // config.default.js includes three sections for the english locale:
  //   "About this service", "The Digitransit platform" and "Data sources"
  // These are always included on the aboutThisService page even if they are removed here.
  // But one can change their content.
  aboutThisService: {
    de: [
      {
        header: 'Über diesen Dienst',
        paragraphs: [
          'Der Quellcode dieser Webanwendung und Hinweise zum Anpassen der verwendeten Dienste für andere geografische Regionen findest du auf <a href="https://github.com/langbein-daniel/BikeTripPlanner">GitHub</a>.',
          'Die Weboberfläche basiert auf Digitransit.',
        ],
      },
      {
        header: 'Die Digitransit Platform',
        paragraphs: [
          'Digitransit ist eine open-source Navigationsplattform welche von HSL und Traficom entwickelt wird. Der Quellcode ist auf <a href="https://github.com/HSLdevcom/">GitHub</a> verfügbar.',
        ],
      },
      {
        header: 'Datenquellen',
        paragraphs: DATA_SOURCES_PARAGRAPHS,
      },
      {
        header: 'Datenschutzhinweise',
        paragraphs: [
          // TODO
          'Die Datenschutzhinweise können <a href="https://cloud.privacy1st.de/s/6yyiD4CRHMno2Sd">hier</a> gelesen werden.',
        ],
      },
    ],

    en: [
      {
        header: 'About this service',
        paragraphs: [
          'The source code of this web app as well as information on how to configure it for different geographic regions can be found on <a href="https://github.com/langbein-daniel/BikeTripPlanner">GitHub</a>.',
          'The web interface is based on Digitransit.',
        ],
      },
      {
        header: 'The Digitransit platform',
        paragraphs: [
          'Digitransit is an open source routing platform developed by HSL and Traficom. Its source code is available at <a href="https://github.com/HSLdevcom/">GitHub</a>.',
        ],
      },
      {
        header: 'Data sources',
        paragraphs: DATA_SOURCES_PARAGRAPHS,
      },
      {
        header: 'Privacy Policy',
        paragraphs: [
          // TODO
          'This website is located in Germany. The privacy policy is at the moment only available in German and can be read <a href="https://cloud.privacy1st.de/s/6yyiD4CRHMno2Sd">here</a>.',
        ],
      },
    ],
  },
};
