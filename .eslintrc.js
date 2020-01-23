// https://eslint.org/docs/user-guide/configuring
module.exports = {
    root: true,
    extends: [
        'airbnb-base',
    ],
    rules: {
        'max-len': 'off',
        indent: ['error', 4],
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
