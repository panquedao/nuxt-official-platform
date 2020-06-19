export default {
  mode: 'universal',
  env: {
    BASE_URL: process.env.BASE_URL,
    NODE_ENV: process.env.NODE_ENV
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    '@/assets/css/index.less',
    'element-ui/lib/theme-chalk/index.css'
  ],
  plugins: [
    '@/plugins/polyfill',
    '@/plugins/axios',
    '@/plugins/filters',
    '@/plugins/element-ui',
    '@/plugins/svg-icon',
    '@/plugins/global-components',
    { src: '@/plugins/loadsh', ssr: false },
  ],
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  purgeCSS: {
    whitelistPatterns: [/el-.+$/],
    whitelistPatternsChildren: [/el-.+$/],
  },
  build: {
    transpile: [/^element-ui/],
    extend (config, ctx) {
      // 排除 nuxt 原配置的影响,Nuxt 默认有vue-loader,会处理svg,img等
      // 找到匹配.svg的规则,然后将存放svg文件的目录排除
      const { resolve } = require('path')
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      svgRule.exclude = [resolve(__dirname, 'assets/icons/svg')]

      //添加loader规则
      config.module.rules.push({
        test: /\.svg$/, //匹配.svg
        include: [resolve(__dirname, 'assets/icons/svg')], //将存放svg的目录加入到loader处理目录
        use: [{ loader: 'svg-sprite-loader',options: {symbolId: 'icon-[name]'}}]
      })
    },
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000
      }
    },
    analyza: true,
    vendor: ['element-ui'],
    maxChunkSize: 300000,
    productionSourceMap: false,
    productionGzip: true,
    productionGzipExtensions: ['js', 'css', 'svg'],
    babel: {
      plugins: [
        [
          'component',
          {
            'libraryName': 'element-ui',
            'styleLibraryName': 'theme-chalk'
          }
        ]
      ]
    }
  }
}
