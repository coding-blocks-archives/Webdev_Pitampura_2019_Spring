function Person (name, age) {
  this.name = name
  this.age = age
}
Person.prototype.nationality = 'Indian'

let p = new Person('John Doe', 20)
let p2 = new Person('Jane Doe', 25)

let obj = {a: 1}
let arr = [ 1,2,4]
let s = 'asdsad'
let n = 2345
let fn = function () { console.log ('omg') }
let b = true
