// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: "/download",
        destination: "https://download.katanainu.com/Katanainu-launcher.exe",
        permanent: true,
      },
      {
        source: "/invest",
        destination: "https://pitch.katanainu.com/invest",
        permanent: false,
      },
    ];
  },
};