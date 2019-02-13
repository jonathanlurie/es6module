// this declares the value 'someValue'
importScripts('scriptToImport.js')

addEventListener('message',function (e) {
  console.log('A value imported to a worker: ' + someValue)

  console.log(e.data)
  postMessage('PONG from Foo worker')
})
