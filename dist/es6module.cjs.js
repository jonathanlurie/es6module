'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/*
* Author    Jonathan Lurie - http://me.jonahanlurie.fr
* License   MIT
* Link      https://github.com/jonathanlurie/es6module
* Lab       MCIN - http://mcin.ca/ - Montreal Neurological Institute
*/

/** Class representing a foo. */
var Foo = function () {

  /**
   * Create a foo.
   * @param {number} anAttribute - a value.
   * @param {number} aSecondAttribute - another value.
   */
  function Foo(anAttribute) {
    var aSecondAttribute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    classCallCheck(this, Foo);

    this.anAttribute = anAttribute;
    this.aSecondAttribute = aSecondAttribute;
    console.log("a foo is constructed");
  }

  /**
   * Set anAttribute.
   * @param {number} a - the value to give to anAttribute.
   */


  createClass(Foo, [{
    key: "setAnAttribute",
    value: function setAnAttribute(a) {
      this.anAttribute = a;
      console.log("calling setAnAttribute()");
    }

    /**
     * Display anAttribute.
     */

  }, {
    key: "printAnAttribute",
    value: function printAnAttribute() {
      console.log(this.anAttribute);
    }

    /**
    * @return {number} The anAttribute value.
    */

  }, {
    key: "getAnAttribute",
    value: function getAnAttribute() {
      return this.anAttribute;
    }
  }]);
  return Foo;
}();

// if we wanted to use foo here:
//import foo from './foo.js';

// but we just want to make it accessible:

exports.Foo = Foo;
