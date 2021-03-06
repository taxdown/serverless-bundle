#!/usr/bin/env node
/**
 * Based on https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/bin/react-scripts.js
 */

'use strict';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

const path = require('path');
const spawn = require('cross-spawn');
const args = process.argv.slice(2);

const scriptIndex = args.findIndex(x => x === 'test');
const script = scriptIndex === -1 ? args[0] : args[scriptIndex];
const nodeArgs = scriptIndex > 0 ? args.slice(0, scriptIndex) : [];

switch (script) {
  case 'eslint': {
    // Lint js files first
    let newArgs = args
      .slice(scriptIndex + 1)
      .concat(['--config', path.resolve(__dirname, '..', 'src', 'eslintrc.json'), '--ext', 'js']);
    let result = spawn.sync('npx', newArgs, { stdio: 'inherit' });
    if (result.status) {
      process.exit(result.status);
    }
    // Lint ts files after
    newArgs = args
      .slice(scriptIndex + 1)
      .concat(['--config', path.resolve(__dirname, '..', 'src', 'ts.eslintrc.json'), '--ext', 'ts']);
    result = spawn.sync('npx', newArgs, { stdio: 'inherit' });
    process.exit(result.status);
    break;
  }
  case 'test': {
    const result = spawn.sync(
      'node',
      nodeArgs.concat(require.resolve('../scripts/' + script)).concat(args.slice(scriptIndex + 1)),
      { stdio: 'inherit' }
    );
    if (result.signal) {
      if (result.signal === 'SIGKILL') {
        console.log(
          'The build failed because the process exited too early. ' +
            'This probably means the system ran out of memory or someone called ' +
            '`kill -9` on the process.'
        );
      } else if (result.signal === 'SIGTERM') {
        console.log(
          'The build failed because the process exited too early. ' +
            'Someone might have called `kill` or `killall`, or the system could ' +
            'be shutting down.'
        );
      }
      process.exit(1);
    }
    process.exit(result.status);
    break;
  }
  default:
    console.log('Unknown script "' + script + '".');
    break;
}
