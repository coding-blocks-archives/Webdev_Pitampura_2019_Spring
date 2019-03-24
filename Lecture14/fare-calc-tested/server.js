const express = require('express')
const {
  calcFare
} = require('./fareutils')
const app = express()

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.use('/', express.static(__dirname + '/public'))
app.post('/calc', (req, res) => {
  console.log(req.body)

  let {
    km,
    min
  } = req.body
  if ((typeof km !== 'number') || (typeof min !== 'number')) {

    return res.status(400).send({
      error: 'km and min must be numbers'
    })
  }
  let fare = calcFare(km, min)

  res.send({
    fare
  })

})

module.exports = {
  app
}
