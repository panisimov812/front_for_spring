const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use('/api', createProxyMiddleware({ target: 'http://localhost:8080', changeOrigin: true }));
};

/**
 * app.use('/api', createProxyMiddleware({ target: 'http://localhost:8080', changeOrigin: true }));:
 * Эта строка определяет, что все запросы, начинающиеся с /api,
 * будут перенаправлены на указанный целевой сервер http://localhost:8080.
 *
 * Флаг changeOrigin: true указывает, что прокси должен изменять заголовок Host,
 * чтобы целевой сервер видел запросы так, будто они отправлены с вашего сервера разработки,
 * а не с браузера пользователя.
 */
