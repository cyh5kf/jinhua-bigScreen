const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api*',
    proxy({
        target: 'http://192.168.40.29:8080/api',
        secure: false,
        pathRewrite: {
          '^/api': ''
        },
    })
  )
  
};