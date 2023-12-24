/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')();
const removeImports = require('next-remove-imports')();

const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@acme/ui'],
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = removeImports(withMDX(nextConfig));
