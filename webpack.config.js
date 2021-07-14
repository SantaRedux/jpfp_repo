module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  
  // target: false,
  //   plugins: [
  //     WebExtensionTarget(nodeConfig)
  //   ],
  // plugins: [
  //   new webpack.ProvidePlugin({
  //     Buffer: ['buffer', 'Buffer'],
  //     process: 'process/browser'
  //   })
  // ],
  context: __dirname,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      }
    ]
  }
}
