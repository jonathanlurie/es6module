'use strict';

/*! rollup-plugin-webworkify/workerhelper.js v0.0.4 | MIT Licensed | Allex Wang <allex.wxn@gmail.com> */
var win = window, BlobBuilder = win.BlobBuilder || win.WebKitBlobBuilder || win.MozBlobBuilder || win.MSBlobBuilder, URL = win.URL || win.webkitURL || win.mozURL || win.msURL, SCRIPT_TYPE = "application/javascript", TARGET = "undefined" == typeof Symbol ? "__t" + +new Date() : Symbol(), Worker$1 = win.Worker, nextTick = win.setImmediate || function(e) {
  return setTimeout(e, 1);
};

function workerCtor(e, t) {
  return function r(n) {
    var o = this;
    if (!(o instanceof r)) return new r(n);
    if (!t) return new Worker$1(e);
    if (Worker$1 && !n) {
      var i = createSourceObject(';(function(f){f&&new(f.default?f["default"]:f)(self)}((' + t.toString() + ")()))"), a = new Worker$1(i);
      return URL.revokeObjectURL(i), o[TARGET] = a;
    }
    var c = new WorkerEmitter({
      close: function() {
        this.destroy();
      }
    }, o);
    Object.assign(new WorkerEmitter(o, c), {
      isThisThread: !0,
      terminate: function() {
        c.close(), this.destroy();
      }
    }), t().call(c, c);
  };
}

function WorkerEmitter(e, t) {
  var r = Object.create(null);
  return e.onmessage = null, e.addEventListener = function(e, t) {
    var n = r[e] || (r[e] = []);
    ~n.indexOf(t) || n.push(t);
  }, e.removeEventListener = function(e, t) {
    var n, o = r[e];
    o && -1 !== (n = o.indexOf(t)) && (o.splice(n, 1), o.length || delete r[e]);
  }, e.postMessage = function(r) {
    nextTick(function() {
      var n = r;
      if (t.onmessage) try {
        t.onmessage({
          data: n,
          target: e
        });
      } catch (e) {
        console.error(e);
      }
      t.emit("message", {
        type: "message",
        data: n,
        target: e,
        timeStamp: +new Date()
      });
    });
  }, e.emit = function(t, n) {
    var o = r[t];
    o && o.forEach(function(t, r) {
      return t.call(e, n);
    });
  }, e.destroy = function() {
    Object.keys(r).forEach(function(e) {
      var t = r[e];
      t && (t.length = 0, delete r[e]);
    }), r = null;
  }, e;
}

if (Worker$1) {
  var testWorker, objURL = createSourceObject("self.onmessage = function () {}"), testArray = new Uint8Array(1);
  try {
    if (/(?:Trident|Edge)\/(?:[567]|12)/i.test(navigator.userAgent)) throw new Error("Not available");
    (testWorker = new Worker$1(objURL)).postMessage(testArray, [ testArray.buffer ]);
  } catch (e) {
    Worker$1 = null;
  } finally {
    URL.revokeObjectURL(objURL), testWorker && testWorker.terminate();
  }
}

function createSourceObject(e) {
  var t = SCRIPT_TYPE;
  try {
    return URL.createObjectURL(new Blob([ e ], {
      type: t
    }));
  } catch (n) {
    var r = new BlobBuilder();
    return r.append(e), URL.createObjectURL(r.getBlob(t));
  }
}

var BarWorker = workerCtor('worker#./Bar.worker.js', function() { return (function(e,r){return e(r={exports:{}},r.exports),r.exports})(function (module, exports) {
  /**
 * In this webworker, we send a message to the main thread every half second
 */

// the worker code lies in the export instruction
function Bar(self) {

  setInterval(function () {
    self.postMessage('A message sent by the worker on a regular interval');
  }, 500);

  self.addEventListener('message',function (e) {
    console.log(e.data);
    self.postMessage('PONG from worker');
  });
}

module.exports = Bar;

});});

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


  /**
   * This calls a pretty classic web worker, from a file in the folder 'example'.
   * Inside this worker, we import a script from yet another file.
   */
  testWorker01() {
    let myFooWorker = new Worker("workers/Foo.worker.js");

    myFooWorker.postMessage('PING from the main thread');

    myFooWorker.onmessage = function(e) {
      console.log(e.data);
    };
  }


  /**
   * Here we create a worker that is encapsulated in the final bundle. In some case,
   * it can be more convenient but the limitation is that we cannot import scripts
   * from this worker, which is very limiting
   */
  testWorker02() {
    let barWorker = new BarWorker();
    barWorker.addEventListener('message', function (e) {
      console.log(e.data);
    });
    barWorker.postMessage("PING from the main thread");
  }
}

var index = ({
  Foo,
});

module.exports = index;
//# sourceMappingURL=es6module.js.map
