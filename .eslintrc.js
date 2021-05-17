module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    'eslint:recommended',
    'react-app',
    'plugin:react-hooks/recommended',
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:mdx/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
      createClass: 'createReactClass',
      pragma: 'React',
      fragment: 'Fragment',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    /* ******************************* FORMATTING ******************************* */

    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: [2, 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'max-len': ['warn', { code: 120 }],
    'object-curly-spacing': 0,
    'object-curly-newline': 0,

    /* ******************************* JAVASCRIPT ******************************* */
    camelcase: 'warn',
    'arrow-parens': ['warn', 'always'],
    'arrow-body-style': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'warn',
    'no-unused-vars': 'warn',
    'class-methods-use-this': 'warn',
    'prefer-destructuring': 'warn',
    'prefer-const': 'warn',
    'no-shadow': 'warn',
    'no-empty': 'warn',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'warn',

    /* ******************************* JSX / REACT ****************************** */

    'react/jsx-first-prop-new-line': [1, 'multiline'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'mdx'] }],
    'react/display-name': 'off',
    'react/jsx-props-no-spreading': 0,

    /* ****************************** DEPENDENCIES ****************************** */

    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  overrides: [
    {
      files: ['*.mdx'],
      rules: {
        semi: 0,
      },
    },
    {
      files: ['./gatsby-config.js'],
      rules: {
        'global-require': 0,
      },
    },
  ],
};
