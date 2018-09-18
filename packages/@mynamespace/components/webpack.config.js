const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  resolve: {
    symlinks: false,
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: 'babel-loader',
      }
    ]
  },
  plugins: [],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'components.umd.js',
    library: 'components',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
}
