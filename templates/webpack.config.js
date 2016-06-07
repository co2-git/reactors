module.exports = {
  entry: "./index.web.js",
  output: {
    path: './web/',
    filename: "index.bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        },
      },
      {
        test: /node_modules\/react-native/,
        loader: 'ignore-loader',
      },
    ]
  }
};
