const platform = process.env.REACTORS_PLATFORM || 'web';

module.exports = {
  entry: `./index.${platform}.js`,
  output: {
    path: `./${platform}`,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        },
      },
      {
        test: /node_modules\/react-native/,
        loader: 'ignore-loader',
      },
    ]
  },
  watch: true,
};
