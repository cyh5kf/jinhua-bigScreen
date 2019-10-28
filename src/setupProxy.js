const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api*',
    proxy({
      // target: 'http://114.67.102.37:8094',
      // target: 'http://192.168.40.29:8094',
        target: 'http://192.168.40.10:8094', // 邵正楼
        secure: false,
        // pathRewrite: {
        //   '^/api': ''
        // },
    })
  )

};
