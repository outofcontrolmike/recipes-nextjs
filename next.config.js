/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["cdn.sanity.io"],
    loader: "custom",
  },
  nextConfig,
};
