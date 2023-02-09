// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
import { CaptureConsole } from "@sentry/integrations";

// Was not able to import from sentryEnv.js in the client without compilation errors

const sentryDsn = process.env.NEXT_PUBLIC_SENTRY_DSN;
const sentryEnvironment = process.env.SANITY_STUDIO_API_DATASET || "unknown";

// Don't check for Sentry auth token as it's not supposed to be available in the client
if (sentryDsn) {
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
        levels: ["error"],
      }),
    ],
  });
}
