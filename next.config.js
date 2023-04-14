/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    esmExternals: true,
  },
  images: {
    loader: "akamai",
    path: "/",
  },
  output: "export",
  outDir: "public",
};

module.exports = nextConfig;
