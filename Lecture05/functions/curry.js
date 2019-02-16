function add(n) {
  if (typeof n === 'undefined') {
    return 0
  }
  function addMore(m) {
    if (typeof m === 'undefined') {
      return n
    }
    n += m
    return addMore
  }
  return addMore
}

let x = add(1)(2)(3)()
console.log(x) // 6

let y = add(5)(6)()
console.log(y) // 11

let z = add(5)(3)(2)(7)()
console.log(z) // 17

let a = add(1)
let b = a(2)
let c = b(3)
let d = c()

let add2 = a => b => c => a + b + c

console.log(add2(1)(2)(3))
