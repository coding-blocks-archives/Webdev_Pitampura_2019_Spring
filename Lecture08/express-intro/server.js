const express = require('express')

const app = express()

app.get(
  '/',
  (req, res) => {
    console.log(req.headers)
    res.send('hello')
  }
)

app.get(
  '/a',
  (req, res) => {
    res.send('world')
  }
)

app.listen(2222)
