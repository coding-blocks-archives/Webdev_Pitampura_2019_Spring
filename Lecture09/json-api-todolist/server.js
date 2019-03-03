const express = require('express')
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(
  '/',
  express.static(__dirname + '/public')
)

let todos = []

app.get('/todos', (req, res) => {
  res.send(todos)
})

app.post('/todos', (req, res) => {
  if (req.body.todo) {
    todos.push(req.body.todo)
  }
  res.send(todos)
})


app.listen(4567)
