
const webpackConfig = require('./webpack.config');

/** ************************************************************************* */

const OFF = 0;
const WARN = 1;
const ERROR = 2;

/** ************************************************************************* */

module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  globals: {
    __DEV__: false,
    DEBUG: false,
  },
  parserOptions: {
    ecmaFeatures: {
      classes: true,
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      jsx: true,
    },
    ecmaVersion: 7,
    sourceType: 'module',
  },
  extends: [
    'plugin:jest/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  plugins: [
    'babel',
    'jsx-a11y',
    'import',
    'react',
    'jest',
  ],
  rules: {
    'brace-style': [ERROR, 'stroustrup', {
      allowSingleLine: true,
    }],
    'default-case': WARN,
    'function-paren-newline': [ERROR, 'consistent'],
    'no-unused-expressions': OFF,
    'no-unused-vars': WARN,
    'template-curly-spacing': OFF, // causes issues with styled-components comment blocks
    // __________________________________________________________________ import
    'import/extensions': OFF,
    // ________________________________________________________________ jsx-a11y
    'jsx-a11y/anchor-is-valid': OFF,
    // ___________________________________________________________________ react
    'react/sort-comp': [WARN, {
      order: [
        'type-annotations',
        'static-methods',
        'displayName',
        'propTypes',
        'contextTypes',
        'childContextTypes',
        'instance-variables',
        'lifecycle',
        'onHandlers',
        'rendering',
        'everything-else',
      ],
      groups: {
        onHandlers: [
          "/^handle.+$/",
          "/^on.+$/",
        ],
        rendering: [
          "/^render.+$/",
          'render'
        ]
      }
    }],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: webpackConfig(),
      }
    }
  }
};
