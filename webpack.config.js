module.exports = {
  entry: "./dist/templates/index.web.js",
  output: {
    path: __dirname + '/dist/',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /node_modules\/react-native/, loader: 'ignore-loader' },
    ]
  }
};
