/*
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-03-09 11:35:12
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-09-02 17:35:18
 * @Description:
 */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:vue/vue3-recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'no-console': 0,
    'vue/no-multiple-template-root': 0,
    // 暂时不校验v-html
    'vue/no-v-html':0
  },
  overrides: [
    {
      files: [
        '**/pages/**/*.{js,ts,vue}',
        '**/layouts/**/*.{js,ts,vue}',
        '**/app.{js,ts,vue}',
        '**/error.{js,ts,vue}'
      ],
      rules: {
        'vue/multi-word-component-names': 'off',
      }
    }
  ]
}
