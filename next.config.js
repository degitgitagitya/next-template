/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins');

const runtimeCaching = require('next-pwa/cache');

const withPWA = require('next-pwa')({
  pwa: {
    dest: 'public',
    runtimeCaching,
    disable: process.env.NODE_ENV === 'development',
    skipWaiting: false,
  },
});

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const defaultConfig = {
  swcMinify: true,
  reactStrictMode: true,
};

module.exports = withPlugins([
  [withPWA],
  [withBundleAnalyzer],
  [defaultConfig],
]);
