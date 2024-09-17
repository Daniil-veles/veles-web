/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV == 'development' ? 'development' : 'production';

const nextConfig = {
    images: {
        domains: ['localhost', 'http://134.0.107.118:8000'],
    },
    env: {
        API_URL: process.env.API_URL,
        IS_DEV: isDev,
    },
};

export default nextConfig;
