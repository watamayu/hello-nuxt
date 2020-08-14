module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'standard',
    'plugin:vue/recommended'
  ],
  plugins: [
   'vue'
  ],
  rules: {
    'no-console': 0, // console.logの許可
    'vue/html-self-closing': 0, // HTMLセルフ閉じタグ許可
    'vue/require-default-prop': 0, // propsのrequire設定なしを許可
    'vue/html-indent': 0, // component内のインデントを許可
    'vue/attribute-hyphenation': 0, // プロパディ名の型の許容
    'comma-dangle': 0, // 末尾カンマを許可
    'space-before-function-paren': 0, // 特定キーワード前のスペースを許可
  }
}



// /*module.exports = {
//   root: true,
//   env: {
//     browser: true,
//     node: true
//   },
//   parserOptions: {
//     parser: 'babel-eslint'
//   },
//   extends: [
//     '@nuxtjs',
//     'plugin:nuxt/recommended',
//     'plugin:vue/recommended',
//     'plugin:prettier/recommended'
//   ],
//   // add your custom rules here
//   rules: {
//     "vue/attribute-hyphenation": 0, // ハイフンがない属性値を許可（Ant Designのプロパティ値）
//     'vue/singleline-html-element-content-newline': 0, // HTML単一行要素の改行を強制しない
//     "no-console": 0, // console.logの許可
//     "vue/html-self-closing": 0, // HTMLセルフ閉じタグ許可　</souce>が許可されないため
//     "comma-dangle": 0, // 末尾カンマを許可
//     "no-lonely-if": 0 // if文のelseブロック内のifを許可
//   }
// }*/

// module.exports = {
//   root: true,
//   env: {
//     browser: true,
//     node: true
//   },
//   parserOptions: {
//     parser: 'babel-eslint'
//   },
//   extends: [
//     'eslint:recommended',
//     // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
//     // より厳しいルールにするには`plugin:vue/strongly-recommended` もしくは `plugin:vue/recommended` に切り替えることを検討してください。
//     'plugin:vue/recommended',
//     'plugin:prettier/recommended'
//   ],
//   // *.vue ファイルを lint にかけるために必要
//   plugins: ['vue'],
//   // ここにカスタムルールを追加します。
//   rules: {
//     semi: [2, 'never'],
//     'no-console': 'off',
//     'vue/max-attributes-per-line': 'off',
//     'prettier/prettier': ['error', { semi: false }]
//   }

// }
