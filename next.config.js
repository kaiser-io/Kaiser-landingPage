/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: "export",
  outDir: "out",
  basePath: '/Kaiser-landingPage'
};

module.exports = nextConfig;
