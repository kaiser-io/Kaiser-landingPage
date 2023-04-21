/** @type {import('next').NextConfig} */

// const environment = process.env.NODE_ENV;
const nextConfig = {
  experimental: {
    appDir: true,
    esmExternals: true,
  },
  // images: {
  //   loader: "akamai",
  //   path: "/",
  // },
  // output: "export",
  outDir: "public",
};

module.exports = nextConfig;
