module.exports = {
    lintOnSave: false,
    devServer: {
        port: 10000,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    configureWebpack: {
        output: {
            libraryTarget: 'umd',
            library: 'appVue'
        }
    }
}