let a = false

setTimeout(() => {
  a = true
}, 1000)

while(!a) {}


console.log('done')
