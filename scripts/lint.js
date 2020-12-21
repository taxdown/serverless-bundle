/**
 * Based on https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/scripts/test.js
 */
'use strict';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

const { ESLint } = require('eslint');
let argv = process.argv.slice(2);

new ESLint().lintFiles(argv);
