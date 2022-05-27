module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
  },

  plugins: ['@typescript-eslint'],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
  },

  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-typescript/base',
    'prettier',
  ],

  rules: {
    'import/extensions': 'off',
    'vue/padding-line-between-blocks': ['error', 'always'],
    '@typescript-eslint/no-shadow': 'off',
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'vue/multi-word-component-names': 'off',
  },

  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'import/named': 'off',
      },
    },
  ],

  ignorePatterns: [
    '.eslintrc.js',
    'commitlint.config.js',
    'vite.config.js',
    'vite.config.noexternal.js',
    'jest.config.js',
    'stylelint.config.js',
    'src/types/vuelidate/*',
    'rollup.config.js',
    'prebuild.mjs',
  ],
};
