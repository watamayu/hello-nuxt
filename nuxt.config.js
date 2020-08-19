
export default {

  mode: 'universal',

  target: 'server',

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

  css: [
    'reset.css',
    // 'element-ui/lib/theme-chalk/index.css',
  ],

  plugins: [
    // '~plugins/element-ui',
  ],

  components: true,

  buildModules: [
    // '@nuxtjs/dotenv',
    // '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],

  modules: [
  ],

  build: {
    // vendor: ['element-ui'],

    // CSSの外部ファイル化
    extractCSS: true,

    // チャンクの分割設定
    optimization: {
      splitChunks: {
        name: true
      }
    },

    // 生成ファイルの命名規則
    filenames: {
      app: () => '[name].js',
      chunk: () => '[name].js',
      css: () => '[name].css',
      img: () => '[path][name].[ext]'
    },

    // TailwindCSSの設定をPostCSSで有効化
    postcss: {
      plugins: {
        tailwindcss: 'tailwind.config.js'
      }
    },

    // CSS圧縮の設定
    purgeCSS: {
      mode: 'postcss'
    },

    extend (config, ctx) {
      // ESlintの実行
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

  },

  // 静的ファイルとしてビルド時の書き出し先（この場合は`/dist/`以下に書き出される）
   generate: {
    dir: 'dist'
  },

  axios: {
    // baseURL: 'https://fir-test-54c02.firebaseio.com',
  },
}
