var config = require('./package.json');

export default {
  entry: config.main, //'src/es6module.js',
  format: config.moduleFormat, //'umd',
  moduleName: config.moduleName, //'ES6MOD',
  dest: config.moduleBuildDir + '/' + config.name + '/' + config.name + '.js' //'build/es6module/es6module.js' // equivalent to --output
};
