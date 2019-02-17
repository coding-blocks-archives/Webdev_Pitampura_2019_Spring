class Person {
  constructor(name, age) {
    this.firstName = name.split(' ')[0]
    this.lastName = name.split(' ').pop()
    this.age = age
  }
  get name() {
    return this.firstName + ' ' + this.lastName
  }
  set name(val) {
    this.firstName = val.split(' ')[0]
    this.lastName = val.split(' ').pop()
  }
  isAdult() {
    return this.age >= 18
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age)
    this.grade = grade
  }
  get section() {
    return this.grade > 5 ? 'secondary' : 'primary'
  }

  set section(val) {
    if (val === 'primary') {
      this.grade = 5
      this.age = 10
    } else if (val === 'secondary') {
      this.grade = 6
      this.age = 11
    } else {
      console.error('Must be primary or secondary')
    }
  }
}


let p = new Person('Harry Potter', 20)
let p2 = new Person('Hermoine', 17)

let s = new Student('Harry', 15, 10)
let s2 = new Student('Ron', 7, 2)
