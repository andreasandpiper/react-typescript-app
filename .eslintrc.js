module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: 'eslint:recommended',
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': 'webpack',
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'import',
    'unused-imports',
    'filenames',
    'promise',
    'jsx-a11y',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:promise/recommended',
    'plugin:import/errors',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    'no-console': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
    'no-empty': 'error',
    'react/react-in-jsx-scope': 'off',
    'id-match': [
      'error',
      '^[0-9a-zA-Z]+([A-Z][a-z]+)*$|^[A-Z]+(?:_[A-Z]+)*$',
      {
        properties: false,
        ignoreDestructuring: true,
        onlyDeclarations: true,
      },
    ],
    'import/newline-after-import': ['error', { count: 1 }],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'index',
          'sibling',
          'parent',
        ],
      },
    ],
    'filenames/match-regex': ['error', '^([a-zA-Z.]+)([A-Z][a-z]+)*$'],
    'object-curly-newline': [
      'error',
      {
        consistent: true,
      },
    ],
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: true,
      },
    ],
    'max-depth': [
      'error',
      {
        max: 4,
      },
    ],
  },
};
