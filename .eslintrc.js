module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'airbnb-base',
    'vuepress',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'max-len': 0,
    'no-underscore-dangle': 0,
    'generator-star-spacing': 0,
    'nuxt/no-cjs-in-config': 'off',
  },
};
