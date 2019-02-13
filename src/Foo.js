import BarWorker from 'worker#./Bar.worker.js'

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
    this.anAttribute = anAttribute
    this.aSecondAttribute = aSecondAttribute
    console.log('a foo is constructed')
  }


  /**
   * Set anAttribute.
   * @param {number} a - the value to give to anAttribute.
   */
  setAnAttribute(a) {
    this.anAttribute = a
    console.log('calling setAnAttribute()')
  }

  /**
   * Display anAttribute.
   */
  printAnAttribute() {
    console.log(this.anAttribute)
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
    let myFooWorker = new Worker("workers/Foo.worker.js")

    myFooWorker.postMessage('PING from the main thread')

    myFooWorker.onmessage = function(e) {
      console.log(e.data)
    }
  }


  /**
   * Here we create a worker that is encapsulated in the final bundle. In some case,
   * it can be more convenient but the limitation is that we cannot import scripts
   * from this worker, which is very limiting
   */
  testWorker02() {
    let barWorker = new BarWorker()
    barWorker.addEventListener('message', function (e) {
      console.log(e.data)
    })
    barWorker.postMessage("PING from the main thread")
  }
}

export default Foo
