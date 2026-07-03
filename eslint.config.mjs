import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.next/**',
      '**/out/**',
      '**/coverage/**',
      '**/.venv/**',
      '**/venv/**',
      '**/.terraform/**',
      '**/next-env.d.ts',
      'synthetic-data/generated/**',
      'synthetic-data/exports/**',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,cjs,mjs,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2024,
      },
      sourceType: 'module',
    },
    rules: {
      'no-console': 'warn',
    },
  },
);
