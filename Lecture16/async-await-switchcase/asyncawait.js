const util = require('util')

const stp = util.promisify(setTimeout)

async function task () {
  await stp(1000)
  console.log('step1')
  await stp(1000)
  console.log('step2')
  await stp(1000)
  console.log('step3')
}

task()
