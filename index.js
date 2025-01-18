import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import importRules from 'eslint-plugin-import';
import sonarjs from 'eslint-plugin-sonarjs';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import vueLint from 'eslint-plugin-vue';

export default [
    // plugins
    {
        plugins: {
            import: importRules,
            sonarjs,
        },
    },

    // config parsers
    {
        files: ['*.vue', '**/*.vue', '*.ts', '**/*.ts'],
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser,
                sourceType: 'module',
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
                extraFileExtensions: ['.vue'],
            },
        },
    },

    // config envs
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },

    // syntax rules
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    ...vueLint.configs['flat/recommended'],

    // code style rules
    stylistic.configs['disable-legacy'],
    stylistic.configs.customize({
        indent: 4,
        quotes: 'single',
        quoteProps: 'as-needed',
        semi: true,
        commaDangle: 'always-multiline',
        braceStyle: '1tbs',
        jsx: false,
    }),

    {
        rules: {
            'arrow-body-style': 'error',
            eqeqeq: 'error',
            'no-extra-semi': 'error',
            'no-extra-parens': 'error',
            'no-unneeded-ternary': 'error',
            'object-property-newline': 'error',
            'object-shorthand': 'error',
            'prefer-const': 'error',
            'prefer-template': 'error',
            'require-await': 'error',
            '@stylistic/arrow-parens': ['error', 'as-needed'],
            '@stylistic/no-mixed-operators': 'off',
            '@typescript-eslint/no-unused-expressions': 'off',
            '@typescript-eslint/consistent-type-imports': 'error',
            'vue/custom-event-name-casing': ['error', 'kebab-case'],
            'vue/html-indent': [
                'error',
                4,
                {
                    attribute: 1,
                    baseIndent: 1,
                    closeBracket: 0,
                    alignAttributesVertically: true,
                    ignores: [],
                },
            ],
            'vue/no-extra-parens': 'error',
            'vue/no-unused-refs': 'error',
            'vue/no-useless-v-bind': 'error',
            'vue/no-v-html': 'off',
            'vue/padding-line-between-blocks': 'error',
            'import/no-duplicates': 'error',
            'import/newline-after-import': 'error',
            'sonarjs/no-inverted-boolean-check': 'error',
            'sonarjs/no-misleading-array-reverse': 'error',
            'sonarjs/prefer-immediate-return': 'error',
            'sonarjs/prefer-single-boolean-return': 'error',
            'sonarjs/reduce-initial-value': 'error',
        },
    },

    // overrides rules
    ...tseslint.config(
        {
            files: ['**/*.{js,mjs,cjs,json,json5,jsonc,vue}'],
            extends: [tseslint.configs.disableTypeChecked],
        },
    ),

    {
        files: ['**/*.cjs'],
        rules: { '@typescript-eslint/no-require-imports': 'off' },
    },

    {
        files: ['*.vue', '**/*.vue'],
        rules: {
            indent: 'off',
            'vue/match-component-file-name': [
                'error',
                {
                    extensions: ['vue'],
                    shouldMatchCase: false,
                },
            ],
        },
    },

    {
        files: ['**/*.{json,json5,jsonc}'],
        rules: {
            '@stylistic/quote-props': ['error', 'always'],
            '@stylistic/quotes': 'off',
            '@stylistic/comma-dangle': ['error', 'never'],
            '@stylistic/semi': ['error', 'never'],
        },
    },
];
