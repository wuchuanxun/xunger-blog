module.exports = {
  //部署应用包时的基本 URL
  baseUrl: (process.env.NODE_ENV === 'production')?"./": "/",
  //当运行 vue-cli-service build 时生成的生产环境构建文件的目录
  outputDir:'dist',
  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir:'',
  //指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
  indexPath:"index.html",
  //生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
  filenameHashing:true,
  /*在 multi-page 模式下构建应用。每个“page”应该有一个对应的 JavaScript 入口文件。其值应该是一个对象，对象的 key 是入口的名字，value 是：
    一个指定了 entry, template, filename, title 和 chunks 的对象 (除了 entry 之外都是可选的)；
    或一个指定其 entry 的字符串。
  */
  pages:undefined,
  /*
  pages: {
    index: {
      // page 的入口
      entry: './src/main.js',
      // 模板来源
      template: './public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'XungerBlog',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  */
  //eslint-loader 会将 lint 错误输出为编译警告。默认情况下，警告仅仅会被输出到命令行，且不会使得编译失败
  lintOnSave: process.env.NODE_ENV !== 'production',
  //是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler:false,
  //默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
  transpileDependencies:[],
  //如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  productionSourceMap:true,
  //设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性
  crossorigin:undefined,
  //在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性
  integrity:false,
  /*configureWebpack如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。
  configureWebpack如果这个值是一个函数，则会接收被解析的配置作为参数。该函数及可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本
  */
  //configureWebpack:{},
  //chainWebpack是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改
  //chainWebpack:function(){}
  // 配置优先于chainWebpack中关于 css loader 的配置
  css:{
    //默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。
    //设置为 true 后你就可以去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块
    modules:false,
    //是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)
    extract:process.env.NODE_ENV === 'production',
    //是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能
    sourceMap:false,
    //向 CSS 相关的 loader 传递选项
    loaderOptions:{},
  },
  //所有 webpack-dev-server 的选项都支持
  //https://webpack.js.org/configuration/dev-server/
  devServer:{
    open: true,
    host: 'localhost',
    port: 8888,
    https: false,
    hotOnly: false,
    proxy: null
  },
  // 构建时开启多进程处理 babel 编译
  parallel: require('os').cpus().length > 1,
  // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // 第三方插件配置
  pluginOptions: {}
}