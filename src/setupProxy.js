const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/socket.io',
        createProxyMiddleware({
            target: 'http://localhost:5030', // Change this to your Express backend URL
            ws: true,
        })
    );
};
