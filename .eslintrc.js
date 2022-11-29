module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/eslint-recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react', '@typescript-eslint', 'prettier'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    quotes: [
      'error', 'single',
    ],
    'no-unused-vars': [
      'error', {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false
      }
    ],
    'react/jsx-filename-extension': [
      'warn', {
        'extensions': ['.tsx']
      }
    ]


  },

// overrides: [

// {

//     files: ['./src/test.ts'],

//     rules: {

//       '@typescript-eslint/no-var-requires': ['off']

//     }

// },

// ]

};
