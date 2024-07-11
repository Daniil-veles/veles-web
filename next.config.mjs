/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV == 'development';

const nextConfig = {
    images: {
        domains: ['localhost'],
    },
    env: {
        API_URL: process.env.API_URL,
        IS_DEV: isDev,
    },
    async rewrites() {
        if (isDev) {
            return [
                {
                    source: '/api/:path*',
                    destination: `${process.env.API_URL}/:path*`,
                },
            ];
        }

        return [];
    },
    async headers() {
        if (isDev) {
            return [
                {
                    source: '/api/:path*',
                    headers: [
                        { key: 'Access-Control-Allow-Origin', value: '*' },
                        { key: 'Access-Control-Allow-Methods', value: 'GET, POST, OPTIONS, PUT, PATCH, DELETE' },
                        { key: 'Access-Control-Allow-Headers', value: 'X-Requested-With,content-type' },
                    ],
                },
            ];
        }
        
        return [];
    },
};

export default nextConfig;
