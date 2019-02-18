let arr = [23, 547, 232, 67, 245, 56, 68, 12, 11, 1, 7, 2]


let arr2 = arr.map(
  (value, index, array) => {
    return value % 2
  }
)

// let arr3 = arr.map((v, i, a) => {
//   a[i-1] = 0
//   return v
// })

let kejriwal = (v) => v % 2 == 0 ? 'even' : 'odd'

let arr3 = arr.map(kejriwal)
