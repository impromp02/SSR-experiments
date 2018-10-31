const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const nodeExternals = require('webpack-node-externals');
const serverConfig = {
  //inform webpack that we're building a bundle for nodeJS rather than browser 
  target: 'node',

  //tell webpack the root file of our server application
  entry: './src/index.js',

  //tell webapck where to put the output bundle file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname + '/build')
  },

  //do not bundle anything inside node_modules folder
  externals: nodeExternals()
};

module.exports = merge(baseConfig, serverConfig);