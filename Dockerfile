# End of life, >= 7 ciritical vulnerabilities
# https://hub.docker.com/layers/library/node/12/images/sha256-3a69ea1270dbf4ef20477361be4b7a43400e559c6abdfaf69d73f7c755f434f5?context=explore
FROM node:12
MAINTAINER Reittiopas version: 0.1

ARG PORT=8080
EXPOSE ${PORT}

ENV \
  # Where the app is built and run inside the docker fs \
  WORK=/opt/digitransit-ui \
  # Used indirectly for saving npm logs etc. \
  HOME=/opt/digitransit-ui \
  # App specific settings to override when the image is run \
  SENTRY_DSN='' \
  SENTRY_SECRET_DSN='' \
  PORT=${PORT} \
  API_URL='' \
  MAP_URL='' \
  OTP_URL='' \
  GEOCODING_BASE_URL='' \
  APP_PATH='' \
  CONFIG='' \
  NODE_ENV='' \
  # setting a non-empty default value for NODE_OPTS
  # if you don't do this then yarn/node seem to think that you want to
  # execute a file called "" (empty string) and doesn't start the server
  # https://github.com/HSLdevcom/digitransit-ui/issues/4155
  #
  # the --title option just sets the harmless property process.title
  # https://nodejs.org/api/cli.html#cli_title_title
  NODE_OPTS='--title=digitransit-ui' \
  RELAY_FETCH_TIMEOUT='' \
  ASSET_URL='' \
  STATIC_MESSAGE_URL=''

# Tell Playwright not to download browser binaries, as it is only used for testing (not building).
# https://github.com/microsoft/playwright/blob/v1.16.2/installation-tests/installation-tests.sh#L200-L216
ENV PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1

WORKDIR ${WORK}
ADD . ${WORK}

RUN npm install yarn

RUN yarn install
RUN yarn setup
RUN OPENSSL_CONF=/dev/null yarn build
#RUN rm -rf static docs test /tmp/* .cache
#RUN yarn cache clean --all

CMD yarn run start
