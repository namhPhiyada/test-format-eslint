module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'no-console': 'warn',
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'eqeqeq': ['error', 'always']
    },
};

