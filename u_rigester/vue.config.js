module.exports = {
    devServer: {
        hot:true,
        open:true,
        port: 8080,
        // public: 'localhost:8080',
        host: 'localhost',
        overlay: {
            warnings: false,
            errors: false
        },
    },
    lintOnSave: false //如果为false，就是取消eslint规则的检查,
}