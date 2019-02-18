let arr2 = [23, 547, 232, 67, 245, 56, 68, 12, 11, 1, 7, 2]


let sum = arr2.reduce(
  (accum, value, index, array) => {
    console.log(`accum: ${accum} | value: ${value}`)
    return accum + value
  }
)
