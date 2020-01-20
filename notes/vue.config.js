module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/notes' + process.env.CI_PROJECT_NAME + '/notes'
    : '/'
}