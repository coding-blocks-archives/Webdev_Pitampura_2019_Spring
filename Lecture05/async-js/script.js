let wait = document.getElementById('wait')
let count = document.getElementById('count')
let result = document.getElementById('result')

wait.onclick = function () {
  let start = new Date().getTime()
  while(new Date().getTime() - start < 5000);

  result.innerText = "WAIT OVER"
}

let c = 0

count.onclick = function () {
  console.log(++c)
}
