module.exports = {
  'parserOptions': {
    'parser': 'babel-eslint'
  },
  'extends': ['plugin:jest/recommended', 'standard', 'plugin:vue/recommended'],
  'plugins': ['jest', 'babel', 'eslint-plugin-jsdoc'],
  'env': {
    'jest/globals': true,
    'jest': true
  },
  'rules': {
    'babel/no-unused-expressions': 0,
    'jsdoc/check-examples': 0,
    'jsdoc/check-param-names': 1,
    'jsdoc/check-tag-names': 1,
    'jsdoc/check-types': 1,
    'jsdoc/newline-after-description': 1,
    'jsdoc/no-undefined-types': 1,
    'jsdoc/require-description': 1,
    'jsdoc/require-description-complete-sentence': 1,
    'jsdoc/require-example': 1,
    'jsdoc/require-hyphen-before-param-description': 1,
    'jsdoc/require-param': 1,
    'jsdoc/require-param-description': 1,
    'jsdoc/require-param-name': 1,
    'jsdoc/require-param-type': 1,
    'jsdoc/require-returns-description': 1,
    'jsdoc/require-returns-type': 1,
    'jsdoc/valid-types': 1,
    'react/prop-types': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/max-attributes-per-line': 4,
    'vue/script-indent': ['error', 2, { 'baseIndent': 1, 'switchCase': 1 }],
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'always',
        'normal': 'always',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'always'
    }]
  },
  'overrides': [
    {
      'files': ['*.vue'],
      'rules': {
        'indent': 'off'
      }
    }
  ]
}
