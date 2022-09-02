const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { htmlWebpackPluginTemplateCustomizer }  = require('template-ejs-loader')

module.exports = {
	mode: 'production',
  entry: './src/js/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
  },
   module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  require('autoprefixer')
                ]
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: htmlWebpackPluginTemplateCustomizer({

        templatePath:'./src/index.ejs', // ejs template path 

        htmlLoaderOption:{
          // you can set individual html-loader option here.
          // but preprocessor option is not supported.
        },
        templateEjsLoaderOption:{ // set individual template-ejs-loader option here
         // root:'', // this is for example, if not needed, just feel free to delete.
         // data:{ // example, too.
         //   foo:'test' // btw, you can have indivisual data injection for each .ejs file using data option
         // }
        }
      }),
    }),
  ]
  
}