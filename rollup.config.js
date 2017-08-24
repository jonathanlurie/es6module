var config = require('./package.json');

import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

export default {
  entry: config.main, //'src/es6module.js',
  format: config.moduleFormat, //'umd',
  moduleName: config.moduleName, //'ES6MOD',
  sourceMap: true,
  dest: config.moduleBuildDir + '/' + config.name + '.js', //'build/es6module/es6module.js' // equivalent to --output
  plugins: [
    nodeResolve({
      /*preferBuiltins: false*/
    }),
    commonjs(),
    globals(),
    builtins(),
  ]
};
