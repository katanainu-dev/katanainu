// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: "/download",
        destination: "https://download.katanainu.com/Katanainu-launcher.exe",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/invest",
        destination: "https://pitch.katanainu.com/invest",
      },
      {
        source: "/invest/:path*",
        destination: "https://pitch.katanainu.com/invest/:path*",
      },
    ];
  },
};