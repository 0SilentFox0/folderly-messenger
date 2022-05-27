module.exports = {
  plugins: ['stylelint-prettier', 'stylelint-order', 'stylelint-scss'],
  extends: [
    'stylelint-prettier/recommended',
    'stylelint-config-rational-order',
  ],
  rules: {
    'prettier/prettier': true,
    'order/properties-order': [],
    'plugin/rational-order': [
      true,
      {
        'empty-line-between-groups': true,
      },
    ],
  },
};
