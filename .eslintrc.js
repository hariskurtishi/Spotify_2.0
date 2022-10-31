// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: ['plugin:react/recommended', 'airbnb'],
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//   },
//   plugins: ['react'],
//   rules: {
//     'max-len': 0,
//     'no-param-reassign': 0,
//     'jsx-a11y/label-has-associated-control': 0,
//     'react/function-component-definition': 0,
//     'react/react-in-jsx-scope': 0,
//     'import/extensions': 0,
//     'react/prop-types': 0,
//     'linebreak-style': 0,
//     'react/state-in-constructor': 0,
//     'import/prefer-default-export': 0,
//     'no-multiple-empty-lines': [
//       'error',
//       {
//         max: 1,
//         maxEOF: 1,
//       },
//     ],
//     'no-underscore-dangle': [
//       'error',
//       {
//         allow: ['_d', '_dh', '_h', '_id', '_m', '_n', '_t', '_text'],
//       },
//     ],
//     'object-curly-newline': 0,
//     'react/jsx-filename-extension': 0,
//     'react/jsx-one-expression-per-line': 0,
//     'jsx-a11y/click-events-have-key-events': 0,
//     'jsx-a11y/alt-text': 0,
//     'jsx-a11y/no-autofocus': 0,
//     'jsx-a11y/no-static-element-interactions': 0,
//     'react/no-array-index-key': 0,
//     'jsx-a11y/anchor-is-valid': [
//       'error',
//       {
//         components: ['Link'],
//         specialLink: ['to', 'hrefLeft', 'hrefRight'],
//         aspects: ['noHref', 'invalidHref', 'preferButton'],
//       },
//     ],
//   },
// };
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020, // Use the latest ecmascript standard
    sourceType: "module", // Allows using import/export statements
    ecmaFeatures: {
      jsx: true, // Enable JSX since we're using React
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  plugins: ["simple-import-sort"],
  extends: [
    "next",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {},
      {
        usePrettierrc: true,
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "no-console": 2,
  },
};
