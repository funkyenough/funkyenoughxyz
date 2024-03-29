/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fracton.ventures",
      },
    ],
  },
};

module.exports = {
  swcMinify: false,
  swcLoader: false,
};
