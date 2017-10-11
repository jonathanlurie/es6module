const es6module = require("../dist/es6module.cjs.js");

var foo = new es6module.Foo(20, 30);

// do something with foo
foo.printAnAttribute();
foo.setAnAttribute(34)
foo.printAnAttribute();
