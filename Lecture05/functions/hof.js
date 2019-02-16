function createGreeter(greeting) {

  function greet(name) {
    console.log(greeting + ' ' + name)
  }

  return greet
}

let x = createGreeter('Good Morning')
x('Delhi')
x('Mumbai')

let y = createGreeter('Hello')
y('World')

createGreeter('Goodevening')('Folks')
