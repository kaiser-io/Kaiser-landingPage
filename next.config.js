/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'export',
  outDir: 'out',
  
  // If the repo name != // <organization>.github.io
  // Unless images will not be loaded on gh-pages.
  assetPrefix: isProd ? "/Kaiser-landingPage/" : "",
}

module.exports = nextConfig
