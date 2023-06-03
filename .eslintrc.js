module.exports = {
  root: true,
  extends: ['eslint:recommended', 'react-app', 'react-app/jest'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'script',
  },
  env: {
    node: true,
    es6: true,
  },
  rules: {
    'no-underscore-dangle': 0,
    'space-before-function-paren': 0,
    'quote-props': 0,
    indent: 0,
    'newline-per-chained-call': 0,
    'no-unsafe-optional-chaining': 'error',
    'object-shorthand': ['error', 'always'],
    'no-duplicate-imports': 'error',
    'no-var': 'error',
    'react/prefer-es6-class': 'error',
    'react/prefer-stateless-function': 'warn',
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'warn',
    'react/destructuring-assignment': 'error',
    'linebreak-style': 'error',
    'dot-notation': 'error',
    yoda: 'error',
    'prefer-const': 'warn',
    'prefer-template': 'error',
    'no-lonely-if': 'error',
    'no-unneeded-ternary': 'error',
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: true,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
  },
};
