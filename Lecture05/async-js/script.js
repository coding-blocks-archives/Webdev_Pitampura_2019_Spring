let wait = document.getElementById('wait')
let count = document.getElementById('count')
let result = document.getElementById('result')

// wait.onclick = function () {
//   let start = new Date().getTime()
//   while(new Date().getTime() - start < 5000);

//   result.innerText = "WAIT OVER"
// }


wait.onclick = function () {
  setTimeout(() => {
    result.innerText = "WAIT OVER"
  }, 5000)

}


let c = 0

count.onclick = function () {
  console.log(++c)
}
