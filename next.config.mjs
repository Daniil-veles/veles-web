// Build
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains: ['localhost'],
//     },
//     env: {
//         API_URL: process.env.API_URL,
//     },
//     crossOrigin: 'anonymous',
// };

// export default nextConfig;


// Dev
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost'],
    },
    env: {
        API_URL: process.env.API_URL,
    },
    crossOrigin: 'anonymous',
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: '/api/proxy/:path*', // Прокси для вашего Python сервера
            },
        ];
    },
};

export default nextConfig;