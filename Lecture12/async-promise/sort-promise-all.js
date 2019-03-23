const fs = require('fs')
const util = require('util')

const F1 = __dirname + '/in1.txt'
const F2 = __dirname + '/in2.txt'
const F3 = __dirname + '/sorted.txt'

const read = util.promisify(fs.readFile)
const write = util.promisify(fs.writeFile)

let start = new Date().getTime()

Promise.all([
  read(F1),
  read(F2)
]).then((data) => {
  let nums = data[0].toString().split('\n')
  nums = nums.concat(data[1].toString().split('\n'))
  nums.sort((a, b) => (a - b))
  return write(F3, nums.join('\n'))
})
.then(() => {
  console.log('Done in ' + (new Date().getTime() - start))
})
