function greet(fetchName) {

  console.log('Hello ' + fetchName())
}


greet(function () {
  return 'Alpha'
})
