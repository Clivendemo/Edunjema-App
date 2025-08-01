import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
  }),
  // Add any custom rules or overrides here if needed
  // For example:
  // {
  //   rules: {
  //     'react/no-unescaped-entities': 'off',
  //     '@next/next/no-page-custom-font': 'off',
  //   },
  // },
]

export default eslintConfig