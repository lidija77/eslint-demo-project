/* eslint-env node */

module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'linebreak-style': 'off', // Allow both LF and CRLF (Windows/Mac/Linux)
        'no-console': 'warn',
        'no-unused-vars': 'error',
        'prefer-const': 'error',
        'no-var': 'error',
        eqeqeq: 'error',
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-eval': 'error', // Security: prevents eval() usage
        'no-implied-eval': 'error', // Security: prevents setTimeout/setInterval with strings
    },
};