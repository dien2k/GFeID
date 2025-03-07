import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import eslintConfigAirbnb from 'eslint-config-airbnb';
import eslintConfigAirbnbTypescript from 'eslint-config-airbnb-typescript';
import eslintConfigAirbnbHooks from 'eslint-config-airbnb/hooks';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      airbnb: eslintConfigAirbnb,
      'airbnb-typescript': eslintConfigAirbnbTypescript,
      'airbnb/hooks': eslintConfigAirbnbHooks,
      // 'plugin:react/recommended',
      // 'plugin:@typescript-eslint/recommended',
      // 'plugin:prettier/recommended',
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 0,
      'import/extensions': 0,
      'import/no-extraneous-dependencies': 0,
      'react/jsx-props-no-spreading': 0,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
);
