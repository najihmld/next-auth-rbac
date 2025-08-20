const prettierConfig = {
  // Formatting rules
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  printWidth: 80,
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  endOfLine: 'lf',
  quoteProps: 'as-needed',

  // JSX specific
  jsxSingleQuote: true,

  // Plugin configurations
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss', // Keep this last for proper integration
  ],

  // Import sorting configuration
  importOrder: [
    '^react$',
    '^react/(.*)$',
    '^next/(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^@/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,

  // File type overrides
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
        tabWidth: 2,
      },
    },
    {
      files: '*.md',
      options: {
        printWidth: 100,
        proseWrap: 'always',
        tabWidth: 2,
      },
    },
    {
      files: ['*.js', '*.jsx'],
      options: {
        parser: 'babel',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      options: {
        parser: 'typescript',
      },
    },
    {
      files: '*.css',
      options: {
        parser: 'css',
        singleQuote: false,
      },
    },
  ],
};

export default prettierConfig;
