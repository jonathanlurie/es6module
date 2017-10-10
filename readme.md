# What is es6module ?
It's a simple module architecture using [Rollup](http://rollupjs.org) to bundle the code in one single source file. The purpose is to use your module in a browser with a single import.  

This module contains a [ES6 classes](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) example: `Foo`. This class is then imported by the project entry-point: `src/main.js`, using the ES6 import style.

Code documentation can also be generated thanks to [Documentation.js](http://documentation.js.org/) that uses the [JSDoc](http://usejsdoc.org/) syntax.

# Prerequisite
Some npm packages need to be installed globally:
```bash
$ npm install -g documentation
$ npm install -g rollup
$ npm install -g google-closure-compiler-js
```

## Using es6module as a base
**es6module** is not made to be used as-is, but rather to be a starting-point/boilerplate to make your own module. Here is the list of things to change to make it yours:

The entry-point of the module is `src/main.js`, of course, you should rename this file with the name of your choice.

In `package.json` file:
- `name`, should be the one of your choice (lower case, possibly with dashes)
- `version`
- `description`
- `entry` entry point for building and bundling (used by Rollup config file)
- `main` is the default CommonJS bundle and entry point to the project when imported/required (both works)
- `module` is a ES6 module bundle, can be *imported* a-la ES6 but not *required* a-la node.
- `browser` is a UMD (contains all the module source **and** dep) bundle that works everywhere: node, import and browser
- `moduleName` is important for browser side bundles
- `author` your name
- `license` you can keep MIT of take another one

The `header.txt` file:  
This header will be copied to the minified bundled version of your module.

**Note** The tags `moduleName`, `moduleBuildDir`, `main` and `moduleBuildDir` from `package.json` are used by `rollup.config.js`.

**Note** If you decide to use *Gulp*, the bundled output file will have the name specified by the value of `main` from `config.json`.

## Adding custom classes
As you can see in `src/main.js`, we import the file `Foo.js`. **Foo** uses the ES6 class notation but alternatively, your custom classes can use the *prototype* kind of declaration. What matters is to export your class or function, like in the very last line of `Foo.js`.

# Build your module
An ES6 module can be composed of as many source files as you wish, but in the end, they will all be smartly concatenated into a single *js* file.

The purpose of building is to have a single *js* source file used in external projects, that contains all the modules. The default is to put it in the `/dist/` directory.
Two alternative ways are possible here, they produce the same result:

1. Using Rollup from the script:  
```bash
$ npm run build
```
This actually calls `rollup -c`, that reads its necessary setting from `rollup.config.js`.

You can also **minify** your UMD bundle using the following:  
```bash
$ npm run build-min
```
This calls the *[Google Closure Compiler](https://developers.google.com/closure/compiler/)* and adds the content of the `header.txt` file.


# Documentation
Even if you code only for yourself, a bit of documentation can not hurt :) .  
Use the [JSDoc](http://usejsdoc.org/) syntax and then run:  
```bash
$ npm run doc
```
Find the result in the `/doc/` directory.
