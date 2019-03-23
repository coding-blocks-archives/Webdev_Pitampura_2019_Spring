const fs = require('fs')
const util = require('util')

const F1 = __dirname + '/in1.txt'
const F2 = __dirname + '/in2.txt'
const F3 = __dirname + '/sorted.txt'

const read = util.promisify(fs.readFile)
const write = util.promisify(fs.writeFile)

let start = new Date().getTime()

async function sort () {
  const p1 = read(F1)
  const p2 = read(F2)

  let nums = (await p1).toString().split('\n')
  nums = nums.concat((await p2).toString().split('\n'))
  nums.sort((a, b) => (a - b))

  await write(F3, nums.join('\n'))
  console.log('Done in ' + (new Date().getTime() - start))

}

console.log('sort started')
sort().then(() => {
  console.log('really really ended')
})
console.log('sort ended')

