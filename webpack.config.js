const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    // css in js：style-loader, css-loader对css进行预处理
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/,
    //             use: ['style-loader', 'css-loader?modules&localIdentName=[name]__[local]'],   // 修改css预处理时候class重命名
    //         },
    //     ],
    // },

    plugins: [
      // css压缩包提取，不在js中混在一起了
      new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[id].css',
      }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader
                    },
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader'
                ],
            },
        ],
    },
};