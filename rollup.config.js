import pkg from './package.json';

import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default [
  // browser-friendly UMD build
  {
    entry: pkg.entry,
    dest: pkg.browser,
    format: 'umd',
    moduleName: pkg.moduleName,
    sourceMap: true,
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs({ include: 'node_modules/**' }), // so Rollup can convert other modules to ES module
      globals(),
      builtins()
    ]
  },


  // CommonJS bundle has to be ES5 because it's the 'main' entry point so it has
  // to be 'required' and 'imported'
  {
    entry: pkg.entry,
    dest: pkg.commonjs,
    format: 'cjs',
    sourceMap: false,
    plugins: [
      globals(),
      builtins(),
      babel({
        exclude: 'node_modules/**',
        babelrc: false,
        presets: [ 'es2015-rollup' ]
      })
      
    ]
  },
  
  
  {
    entry: pkg.entry,
    dest: pkg.module,
    format: 'es',
    sourceMap: false,
    plugins: [
      globals(),
      builtins(),
    ]
  },

];
