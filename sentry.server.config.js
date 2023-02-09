// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
import { CaptureConsole } from "@sentry/integrations";
import { haveSentryAuthToken, sentryDsn, sentryEnvironment } from "./sentryEnv";

if (sentryDsn && haveSentryAuthToken) {
  Sentry.init({
    dsn: sentryDsn,
    tracesSampleRate: 0.1, // Use tracesSampler for finer control
    environment: sentryEnvironment,
    // ...
    // Note: if you want to override the automatic release value, do not set a
    // `release` value here - use the environment variable `SENTRY_RELEASE`, so
    // that it will also get attached to your source maps
    integrations: [
      new CaptureConsole({
        // array of methods that should be captured
        // defaults to ['log', 'info', 'warn', 'error', 'debug', 'assert']
        levels: ["warn", "error"],
      }),
    ],
  });
}
