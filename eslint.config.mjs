import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'module', // Используем модули ES6
      globals: globals.browser, // Добавляем глобальные переменные для браузера
    },
  },
  pluginJs.configs.recommended, // Подключаем рекомендованные правила от ESLint для JavaScript
];
