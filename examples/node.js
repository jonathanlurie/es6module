const ES6MOD = require("../dist/es6module.cjs.js");

var foo = new ES6MOD.Foo(20, 30);

// do something with foo
foo.printAnAttribute();
foo.setAnAttribute(34)
foo.printAnAttribute();
