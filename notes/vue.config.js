module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/notes/'
    : '/',
    assetsDir: 'assets',
    productionSourceMap: false
}  