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
                  corejs: 3,
                },
                "@babel/preset-react",
              ],
            ],
          },
        },
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.scss/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // {
      //   test: /\.css/,
      //   exclude: /node_modules/,
      //   use: ["style-loader", "css-loader"],
      // },
    ],
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js" /*, ".css"*/, "scss"],
    fallback: {
      http: require.resolve("stream-http"),
      buffer: false,
      url: false,
    },
  },
};

// module.exports = {
//   entry: [__dirname + "/src/index.tsx"],
//   mode: "development",
//   output: {
//     path: __dirname + "/pages",
//     filename: "main.js",
//   },

//   module: {
//     rules: [
//       {
//         test: /\.tsx$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "ts-loader",
//         },
//       },
//       {
//         test: /\.css/,
//         exclude: /node_modules/,
//         use: [
//           {
//             loader: "style-loader",
//           },
//           {
//             loader: "css-loader",
//           },
//         ],
//       },
//     ],
//   },

//   resolve: {
//     extensions: [".ts", ".js"],
//   },
// };
