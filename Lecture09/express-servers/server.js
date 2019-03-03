const express = require('express')
const app = express()

app.get(
  '/',
  (req, res) => {
    console.log('running')
    res.send('ada<b>sdadb</b>dg')
  }
)

app.listen(3456, () => {
  console.log('started')
})
