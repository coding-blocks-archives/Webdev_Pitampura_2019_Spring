const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get(
  '/hello',
  (req, res) => {
    console.log(req.query)
    if (req.query.name) {
      return res.send('Hello ' + req.query.name + '!!')
    }
    res.send('Hello!')
  }
)

app.post(
  '/hello',
  (req, res) => {
    console.log(req.body)
    res.send('Hello!')
  }
)

app.get(
  '/bye',
  (req, res) => {
    res.send('Goodbye!')
  }
)

app.listen(3456, () => {
  console.log('started')
})
