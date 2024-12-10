/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    images: {
      unoptimized: true,
    },
    basePath: '/brodin_game_awards',
};

module.exports = nextConfig
