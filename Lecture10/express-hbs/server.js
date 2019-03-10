const express = require('express')
const app = express()

app.set('view engine', 'hbs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

let tasks = []

app.get('/tasks', (req, res) => {

  res.render('tasks', {
    tasks
  })
})

app.post('/tasks', (req, res) => {

  tasks.push({
    task: req.body.task,
    priority: req.body.priority
  })

  res.redirect('/tasks')
})

app.listen(3888)
