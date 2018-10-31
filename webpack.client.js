const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const clientConfig = {
  //tell webpack the root file of our server application
  entry: './src/client/client.js',

  //tell webapck where to put the output bundle file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname + '/public')
  }
};

module.exports = merge(baseConfig, clientConfig);