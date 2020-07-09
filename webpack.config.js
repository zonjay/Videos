const path = require('path');
module.exports = {
    mode: 'development',
    //進入點
    entry: ['./src/index.js'],
    //產出 bundle.js
    output: {
        filename: 'bundle.js',
        path: path.resolve('./'),
    },
    module: {
        //在 rules 內設定 loader
        rules: [
            {
                //指定編譯檔案的副檔名，以正規表達式尋找結尾為 '.js' 的檔案
                test: /.js$/,
                //編譯時排除 node_modules，不編譯
                exclude: /node_modules/,
                //指定進行編譯的套件
                use: {
                    loader: 'babel-loader',
                    //指定 loader 中的 preset (處理 JSX 與 ES6)
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                },
            },
        ]
    },
}
