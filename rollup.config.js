import pkg from './package.json'
import { terser } from "rollup-plugin-terser"
import resolve from 'rollup-plugin-node-resolve'
import builtins from 'rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'
import commonjs from 'rollup-plugin-commonjs'


const configurations = [
  // UMD
  {
    input: pkg.entry,
    output: {
      file: pkg.unpkg,
      name: pkg.name,
      sourcemap: true,
      format: 'umd',
    },
    plugins: [
      resolve(),
      commonjs({ include: 'node_modules/**' }),
      globals(),
      builtins()
    ]
  },

  // ESMODULE
   {
     input: pkg.entry,
     output: {
       file: pkg.module,
       name: pkg.name,
       sourcemap: true,
       format: 'es'
     },
     external: [
       ...Object.keys(pkg.dependencies || {}),
     ],
     plugins: [
       resolve(),
       commonjs({ include: 'node_modules/**' }),
       globals(),
       builtins()
     ]
   },


   // CJS
  {
    input: pkg.entry,
    output: {
      file: pkg.main,
      name: pkg.name,
      sourcemap: true,
      format: 'cjs'
    },
    external: [
      ...Object.keys(pkg.dependencies || {}),
    ],

    plugins: [
      resolve(),
      commonjs({ include: 'node_modules/**' }),
      globals(),
      builtins()
    ]
  }

]


// Adding the minified umd bundle
if (process.env.NODE_ENV === "production") {
  configurations.push(
  {
    input: pkg.entry,
    output: {
      file: pkg.unpkg.replace(".js", '.min.js'),
      name: pkg.name,
      sourcemap: false,
      format: 'umd',
    },
    plugins: [
      resolve(),
      commonjs({ include: 'node_modules/**' }),
      globals(),
      builtins(),
      terser()]
  })
}

export default configurations
