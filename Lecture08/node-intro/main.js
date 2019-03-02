if (typeof window === 'undefined') {
  const lib = require('./lib')
  console.log(lib.add(3,5))
} else {
  const lib = window.lib

  console.log(add(3,5))

}

