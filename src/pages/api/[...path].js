import { createProxyMiddleware } from 'http-proxy-middleware';

const apiProxy = createProxyMiddleware({
    target: process.env.API_URL || 'http://134.0.107.118:8000', // URL бэка
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
