class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  isAdult() {
    return this.age >= 18
  }
}


let p = new Person('Harry Potter', 20)
let p2 = new Person('Hermoine', 17)
