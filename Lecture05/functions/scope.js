let x = 10
console.log(x)  //10

function alpha() {
  // console.log(x) // 20
  let x = 20

  if (true) {
    console.log(x) // 30
    let x = 30
  }
  console.log(x) // 20

}

alpha()
console.log(x) // 10
