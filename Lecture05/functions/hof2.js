function greet(fetchName) {

  console.log('Hello ' + fetchName())
}

function x () {
  return 'Alpha'
}
greet(x)
