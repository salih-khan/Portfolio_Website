module.exports = {
  devServer: {
    proxy: {
      '/pdf': {
        target: 'https://www.w3.org',
        changeOrigin: true,
        pathRewrite: { '^/pdf': '' }, // optional: remove '/pdf' from the URL
      },
    },
  },
};
