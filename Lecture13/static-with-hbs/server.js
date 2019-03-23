const express = require('express')

const app = express()
app.set('view engine', 'hbs')

app.use('/', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.render('xyz', {
    val1: Math.random(),
    val2: Math.random()
  })
})

app.listen(7654, () => {
  console.log('http://localhost:7654')
})
