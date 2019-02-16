
setTimeout(function afterwait () {
  console.log('wait over')
}, 500)

console.log('waiting')
function wait2sec() {
  let start = new Date().getTime()
  while(new Date().getTime() - start < 2000);
}

wait2sec()
