const fs = require('fs')
const util = require('util')

const F1 = __dirname + '/in1.txt'
const F2 = __dirname + '/in2.txt'
const F3 = __dirname + '/sorted.txt'

const read = util.promisify(fs.readFile)
const write = util.promisify(fs.writeFile)

let start = new Date().getTime()

let nums = []
read(F1)
  .then((data) => {
    nums = nums.concat(data.toString().split('\n'))
    return read(F2)
  })
  .then((data) => {
    nums = nums.concat(data.toString().split('\n'))
    nums.sort((a, b) => (a - b))

    return write(F3, nums.join('\n'))
  })
  .then(() => {
    console.log('Done in ' + (new Date().getTime() - start))
  })
