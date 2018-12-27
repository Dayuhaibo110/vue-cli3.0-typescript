module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ?
    '/production-sub-path/' :
    '/',
  devServer: {
    proxy: 'http://mock.xiaoyun.com/mock',
    // proxy: {
    //   '/api': {
    //     target: 'http://mock.xiaoyun.com/mock',
    //     changeOrigin: true
    //   }
    // }
  },
}