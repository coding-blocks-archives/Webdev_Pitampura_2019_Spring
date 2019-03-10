const express = require('express')
const app = express()

app.set('view engine', 'hbs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

let tasks = []

app.use('/', express.static(__dirname + '/public'))

app.get('/tasks', (req, res) => {

  if (req.query.mode == 'json') {
    return res.send(tasks)
  }


  res.render('tasks', {
    tasks
  })
})

app.post('/tasks', (req, res) => {
  tasks.push({
    task: req.body.task,
    priority: req.body.priority
  })
  if (req.query.mode == 'json') {
    return res.send({
      success: true
    })
  }
  res.redirect('/tasks')
})

app.listen(3888)
