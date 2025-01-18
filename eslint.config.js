import config from './index.js';

export default [
    ...config,

    {
        files: ['index.js'],
        rules: { 'perfectionist/sort-objects': 'off' },
    },
];
