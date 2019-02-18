let arr = [7, 145, '12', 123, '254', 387, 9, 1, 4, 2, 11, 24, 38, 5]
console.log(arr)
arr.sort()

console.log(arr)


let arr2 = [23, 547, 232, 67, 245, 56, 68, 12, 11, 1, 7, 2]
console.log(arr2)

let minComp = (a, b) => a - b
let maxComp = (a, b) => b - a

arr2.sort(minComp)
console.log(arr2)
arr2.sort(maxComp)
console.log(arr2)
