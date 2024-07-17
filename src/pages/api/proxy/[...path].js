import { createProxyMiddleware } from 'http-proxy-middleware';

const apiProxy = createProxyMiddleware({
    target: process.env.API_URL, // URL вашего Python сервера
    changeOrigin: true,
    pathRewrite: {
        '^/api': '', // Убираем /api из пути запроса
    },
});

export default (req, res) => apiProxy(req, res);

export const config = {
    api: {
        bodyParser: false, // Отключаем bodyParser для проксирования
    },
};
