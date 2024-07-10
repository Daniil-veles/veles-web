/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost'],
    },
    env: {
        API_URL: process.env.API_URL,
    },
};

export default nextConfig;
