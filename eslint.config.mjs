import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginNode from 'eslint-plugin-node';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'module', // Используем модули ES6
      globals: globals.browser, // Для браузерных глобальных объектов
    },
  },
  {
    files: ['webpack.config.js'], // Настроить только для конфигурации Webpack
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.node, // Добавляем глобальные переменные Node.js
        __dirname: 'readonly',
        module: 'readonly',
        require: 'readonly',
      },
    },
    plugins: {
      node: pluginNode,
    },
    rules: {
      'node/no-unsupported-features/es-syntax': 'off', // Отключение проверки на синтаксис ES в Node.js
    },
  },
  pluginJs.configs.recommended, // Подключаем стандартные правила для JavaScript
];
