const { withSentryConfig } = require("@sentry/nextjs");

const config = {
  sentry: {
    hideSourceMaps: false, // Only works for production builds
    // autoInstrumentServerFunctions: false, // uncomment this line for the build to pass
  },
};

const sentryWebpackPluginOptions = {
  silent: true, // Suppresses all logs. For all available options, see https://github.com/getsentry/sentry-webpack-plugin#options.
};

module.exports = withSentryConfig(config, sentryWebpackPluginOptions);
