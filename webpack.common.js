const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
    sw: path.resolve(__dirname, 'src/scripts/sw.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    new WebpackPwaManifest({
      name: 'Isi Piring - Food Recomendation App',
      short_name: 'IsiPiring',
      description: 'Isi Piring adalah aplikasi yang merekomendasikan anda makanan dan tempat makan sesuai selera anda!',
      background_color: '#202020',
      theme_color: '#dda311',
      crossorigin: null,
      fingerprints: false,
      icons: [
        {
          src: path.resolve('src/public/images/manifest/icon1024.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
  ],
};
