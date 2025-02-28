import moment from 'moment-timezone/moment-timezone';

// Configure moment with the selected language
// and with the relative time thresholds used when humanizing times
export default function configureMoment(language, config) {
  moment.locale(language);

  if (config.timezone) {
    moment.tz.setDefault(config.timezone);
  }

  if (language !== 'en') {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    require(`moment/locale/${language}`);
  }

  moment.relativeTimeThreshold(
    's',
    config.moment.relativeTimeThreshold.seconds,
  );
  moment.relativeTimeThreshold(
    'm',
    config.moment.relativeTimeThreshold.minutes,
  );
  moment.relativeTimeThreshold('h', config.moment.relativeTimeThreshold.hours);
  moment.relativeTimeThreshold('d', config.moment.relativeTimeThreshold.days);
  moment.relativeTimeThreshold('M', config.moment.relativeTimeThreshold.months);
  return moment;
}
