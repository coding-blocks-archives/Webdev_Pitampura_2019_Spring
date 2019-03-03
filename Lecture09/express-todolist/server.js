const express = require('express')
const app = express()

app.use(express.urlencoded(
  {extended: true}
))
app.use(express.json())

let tasks = []

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
    <input name="task">
    <input type="checkbox" name="alpha" value="a"> A
    <input type="checkbox" name="alpha" value="b"> B
    <input type="checkbox" name="alpha" value="c"> C
    <button type="submit"> <i>add</i>
    </button>
  </form>
  <ul>
    ${tasks.map(t => '<li>' + t + '</li>').join(' ')}
  </ul>
  `)
})

app.post('/', (req, res) => {
  console.log(req.body)
  if (req.body.task) {
    tasks.push(req.body.task)
    console.log(tasks)
  }

  res.redirect('/')

})


app.listen(3434)
