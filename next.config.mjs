import { withSentryConfig } from "@sentry/nextjs/config";

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withSentryConfig(nextConfig, {
  org: "jsm-ji",
  project: "theodosia_ntenti",

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Former `hideSourceMaps: true` (removed in @sentry/nextjs v10+).
  sourcemaps: {
    deleteSourcemapsAfterUpload: true,
  },

  // Former top-level `disableLogger: true`. Applies to webpack and Turbopack.
  bundleSizeOptimizations: {
    excludeDebugStatements: true,
  },

  webpack: {
    // Former top-level `automaticVercelMonitors: true`.
    automaticVercelMonitors: true,
  },
});
