const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /.(ts|tsx)?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        // 解析的后缀名列表,优先级从高到低
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': path.resolve(process.cwd(), './src')
        },
        // false表示 该模块不用 polyfill，设置具体的包名会作为polyfill模块
        fallback: { http: false, https: false, stream: false, assert: false, zlib: false }
    }
};
