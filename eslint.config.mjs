import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginNode from 'eslint-plugin-node';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'module',
      globals: globals.browser,
    },
  },
  {
    files: ['webpack.config.js'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.node,
        __dirname: 'readonly',
        module: 'readonly',
        require: 'readonly',
      },
    },
    plugins: {
      node: pluginNode,
    },
    rules: {
      'node/no-unsupported-features/es-syntax': 'off',
    },
  },
  pluginJs.configs.recommended,
];
