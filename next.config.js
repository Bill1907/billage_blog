/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        mdxRs: true,
        serverComponentsExternalPackages: ['@acme/ui'],
    }
}

const removeImports = require('next-remove-imports')();
const withMDX = require('@next/mdx')();

module.exports = removeImports(withMDX(nextConfig));
