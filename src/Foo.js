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


    let barWorker = new BarWorker()
    barWorker.addEventListener('message', function (e) {
      console.log(e.data)
    })
    barWorker.postMessage("PING from the main thread")
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
}

export default Foo
