(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.ES6MOD = global.ES6MOD || {})));
}(this, (function (exports) { 'use strict';

/*
* Author    Jonathan Lurie - http://me.jonahanlurie.fr
* License   MIT
* Link      https://github.com/jonathanlurie/es6module
* Lab       MCIN - http://mcin.ca/ - Montreal Neurological Institute
*/


/** Class representing a foo. */
class Foo {

  /**
   * Create a foo.
   * @param {number} anAttribute - a value.
   * @param {number} aSecondAttribute - another value.
   */
  constructor(anAttribute, aSecondAttribute = 10 ) {
    this.anAttribute = anAttribute;
    this.aSecondAttribute = aSecondAttribute;
    console.log("a foo is constructed");
  }

  /**
   * Set anAttribute.
   * @param {number} a - the value to give to anAttribute.
   */
  setAnAttribute(a){
    this.anAttribute = a;
    console.log("calling setAnAttribute()");
  }

  /**
   * Display anAttribute.
   */
  printAnAttribute(){
    console.log(this.anAttribute);
  }

  /**
  * @return {number} The anAttribute value.
  */
  getAnAttribute(){
    return this.anAttribute; 
  }

}

// if we wanted to use foo here:
//import foo from './foo.js';

// but we just want to make it accessible:

exports.Foo = Foo;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=es6module.js.map
