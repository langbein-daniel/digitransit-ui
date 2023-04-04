const CONFIG = 'btp';
const APP_TITLE = 'BikeTripPlanner';
const APP_DESCRIPTION = 'Plan trips with bike & transit';
const YEAR = 1900 + new Date().getYear();

const DEFAULT_MAP_URL =
  process.env.DEFAULT_MAP_URL || 'http://localhost:7070/styles/bicycle/';
const STOP_MAP_URL =
  process.env.STOP_MAP_URL ||
  'http://localhost:8080/otp/routers/default/vectorTiles/stops,stations/';
const OTP_TIMEOUT = parseInt(process.env.OTP_TIMEOUT, 10) || 20000;

const minLat = process.env.MIN_LAT || '48.70792025947608';
const maxLat = process.env.MAX_LAT || '50.25793688217101';
const minLon = process.env.MIN_LON || '10.011636032586688';
const maxLon = process.env.MAX_LON || '12.223993889052613';

const MIN_ZOOM = process.env.MIN_ZOOM || 9;

export default {
  // This is required e.g. for favicon generation during `yarn build`.
  CONFIG,

  YEAR,

  // In milliseconds.
  // - https://github.com/HSLdevcom/digitransit-ui/commit/da6890e3c8abc880b391190b734d5d56384f7ffd#diff-d578a4a1cccbfcf5001962e74b1c2faad229fbe727ba8d3beecaec621e5faafcR104
  // - https://github.com/relay-tools/react-relay-network-modern/blob/bf0b16f7a008bdaf72e97a92eeddf9ee4d2d7a38/src/middlewares/retry.js#L51
  // - https://github.com/relay-tools/react-relay-network-modern/blob/bf0b16f7a008bdaf72e97a92eeddf9ee4d2d7a38/src/middlewares/retry.js#L77
  OTPTimeout: OTP_TIMEOUT,

  // Transit Feed
  //
  // TODO transit agency??
  // GTFS.zip/agency.txt/agency_name=HSL
  // feedIds: ['OULU'],

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

  // Limit the available languages in `MainMenu.js`.
  availableLanguages: ['en', 'de'],

  // Documentation: https://momentjs.com/timezone/docs/#/data-loading/adding-a-zone/
  // Up-to-date timezone data: https://github.com/moment/moment-timezone/blob/develop/data/packed/latest.json
  timezoneData:
    'Europe/Berlin|LMT CET CEST CEMT|-R.s -10 -20 -30|012121212121212321212321212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-36RcR.s UbWR.s 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 kL0 Nc0 m10 WM0 1ao0 1cp0 dX0 jz0 Dd0 1io0 17c0 1fA0 1a00 1ehA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00|41e5',

  showWeatherInformation: false,

  availableTickets: {},
  // If true, load available tickets from OTP and store in `availableTickets` config value.
  loadAvailableTickets: false,

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

  // See also: app/configurations/btp/favicon.svg -> fill color
  // See also: sass/themes/btp/_theme.scss -> $primary-color
  colors: {
    primary: '#208922',
    // iconColors: {
    //   'mode-bus': '#208922',
    // },
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
    lat: 49.446403,
    lon: 11.082948,

    // TODO: With the following, the main page has a white map until one searches for a location.
    // lat: 0.5 * (minLat + maxLat),
    // lon: 0.5 * (minLon + maxLon),
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
      corner1: [maxLat, maxLon],
      corner2: [minLat, minLon],
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
    copyright: { label: `© Daniel Langbein ${YEAR}` },
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
        paragraphs: [
          // TODO. Inspiration: https://herrenberg.stadtnavi.de/dieser-dienst
          "Karten, Straßen, Gebäude, Fahrradständer, Haltestellen, etc. wurden von OpenStreetMap Beitragenden erstellt. Adressdaten stammen von Who's On First. Öffentliche Verkehrslinien und Fahrpläne stammen vom VGN.",
        ],
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
        paragraphs: [
          // TODO
          "Maps, streets, buildings, bike lockers, stop locations etc. are provided by OpenStreetMap contributors. Address data is retrieved from Who's On First. Public transport routes and timetables are downloaded from the VGN.",
        ],
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
