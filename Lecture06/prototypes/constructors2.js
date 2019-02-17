function Person (name, age) {
  this.name = name
  this.isAdult = function () {
    return age >= 18
  }
  this.incrAge = function () {
    age++
  }
}

let p = new Person('Harry Potter', 20)
let q = new Person('Ginny', 15)


p.age // should not be available

p.isAdult() // returns boolean, age >= 18

p.incrAge() // increment age by 1


q.isAdult() // false
q.incrAge()
q.isAdult() // true
