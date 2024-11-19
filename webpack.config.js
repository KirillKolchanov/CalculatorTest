import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('build'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: 'asset/inline',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    static: path.resolve('build'),
    compress: true,
    port: 8080,
    open: true,
    hot: true, // включение горячей перезагрузки
    watchFiles: ['src/**/*', 'index.html'], // следит за изменениями в этих файлах
  },
  mode: 'development',
};
