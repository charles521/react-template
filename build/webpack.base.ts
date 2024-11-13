import { Configuration, DefinePlugin } from 'webpack'
import HtmlWebpackPlugin from "html-webpack-plugin"
import * as dotenv from "dotenv";

const path = require('path')

const envConfig = dotenv.config({
  path: path.resolve(__dirname, "../env/.env." + process.env.BASE_ENV),
});

const baseConfig: Configuration = {
  entry: path.join(__dirname, '../src/index.tsx'),
  output: {
    filename: 'static/js/[name].js',
    path: path.join(__dirname, '../dist'),
    clean: true,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /.(ts|tsx)$/, // 匹配.ts, tsx文件
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json', '.less', '.css', '.scss', '.sass'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack5-react-ts",
      filename: "index.html",
      template: path.join(__dirname, '../public/index.html'),
      inject: true,
      hash: true,
      cache: false,
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true, //去空格
        removeComments: true, // 去注释
        minifyJS: true, // 在脚本元素和事件属性中缩小JavaScript(使用UglifyJS)
        minifyCSS: true, // 缩小CSS样式元素和样式属性
      },
      nodeModules: path.resolve(__dirname, "../node_modules")
    }),
    new DefinePlugin({
      "process.env": JSON.stringify(envConfig.parsed),
      "process.env.BASE_ENV": JSON.stringify(process.env.BASE_ENV),
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    })
  ].filter(Boolean)
}

export default baseConfig