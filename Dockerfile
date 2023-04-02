# End of life, >= 7 ciritical vulnerabilities
# https://hub.docker.com/layers/library/node/12/images/sha256-3a69ea1270dbf4ef20477361be4b7a43400e559c6abdfaf69d73f7c755f434f5?context=explore
FROM node:12

# Where the app is built and run
ENV WORK=/opt/digitransit-ui
# Used indirectly for saving npm logs etc.
ENV HOME=/opt/digitransit-ui
ENV NODE_OPTS='--title=BikeTripPlanner'

# Tell Playwright not to download browser binaries, as it is only used for testing (not building).
# https://github.com/microsoft/playwright/blob/v1.16.2/installation-tests/installation-tests.sh#L200-L216
ENV PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1

WORKDIR ${WORK}
ADD . ${WORK}

# RUN npm install yarn

RUN yarn install \
    && yarn setup \
    && OPENSSL_CONF=/dev/null yarn build \
    && rm -rf static docs test /tmp/* .cache \
    && yarn cache clean --all

# The build is faster when only the files
# for one config are built.
# But at the moment the build fails
# when these variables are specified.
ARG CONFIG=btp
ENV CONFIG=${CONFIG}

ARG MIN_LON=10.011636032586688
ARG MAX_LON=12.223993889052613
ARG MIN_LAT=48.70792025947608
ARG MAX_LAT=50.25793688217101
ENV MIN_LON=${MIN_LON}
ENV MAX_LON=${MAX_LON}
ENV MIN_LAT=${MIN_LAT}
ENV MAX_LAT=${MAX_LAT}

ARG PORT=8080
ENV PORT=${PORT}
EXPOSE ${PORT}

ARG DEFAULT_MAP_URL=http://localhost:7070/styles/bicycle/
ENV DEFAULT_MAP_URL=${DEFAULT_MAP_URL}

ARG STOP_MAP_URL=http://localhost:8080/otp/routers/default/vectorTiles/stops,stations/
ENV STOP_MAP_URL=${STOP_MAP_URL}

ARG GEOCODING_BASE_URL=http://localhost:4000/v1
ENV GEOCODING_BASE_URL=${GEOCODING_BASE_URL}

ARG OTP_URL=http://localhost:8080/otp/routers/default/
ENV OTP_URL=${OTP_URL}

ARG OTP_TIMEOUT=12500
ENV OTP_TIMEOUT=${OTP_TIMEOUT}

CMD yarn run start

# Fetch the 'About this service' page.
HEALTHCHECK --interval=15s --retries=3 --start-period=30s --timeout=5s \
 CMD curl -sSf 'http://localhost:8080/tietoja-palvelusta' | grep 'About this service' || exit 1
