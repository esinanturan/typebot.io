import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 0.5,
  environment: process.env.NODE_ENV,
  ignoreErrors: ["bot is now closed", "session not found", "timeout reached"],
});
