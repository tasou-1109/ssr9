module.exports = {
  entry: ["./server/index.js"],
  target: "node",
  mode: "development",
  output: {
    path: __dirname + "/dist",
    filename: "server.js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            //Babelの設定
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                },
              ],
            ],
          },
        },
      },
    ],
  },

  resolve: {
    fallback: {
      http: require.resolve("stream-http"),
      buffer: false,
      url: false,
    },
  },
};
