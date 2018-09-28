(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.es6module = factory());
}(this, (function () { 'use strict';

  /**
   * This class is for Foo
   */
  class Foo {
    /**
     * Creates a foo.
     * @param {number} anAttribute - a value.
     * @param {number} aSecondAttribute - another value.
     */
    constructor(anAttribute, aSecondAttribute = 10) {
      this.anAttribute = anAttribute;
      this.aSecondAttribute = aSecondAttribute;
      console.log('a foo is constructed');
    }

    /**
     * Set anAttribute.
     * @param {number} a - the value to give to anAttribute.
     */
    setAnAttribute(a) {
      this.anAttribute = a;
      console.log('calling setAnAttribute()');
    }

    /**
     * Display anAttribute.
     */
    printAnAttribute() {
      console.log(this.anAttribute);
    }

    /**
    * @return {number} The anAttribute value.
    */
    getAnAttribute() {
      return this.anAttribute
    }
  }

  var index = ({
    Foo,
  });

  return index;

})));
//# sourceMappingURL=es6module.js.map
