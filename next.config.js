/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    reactStrictMode: true,
    images: {
        domains: ['images.unsplash.com'],
    },
    experimental: {
        appDir: true,
    },
};

module.exports = nextConfig;
