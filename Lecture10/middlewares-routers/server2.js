const app = require('express')()

app.use('/a', (req, res, next) => {
  console.log('/a')
  next()
})
app.use('/a/b', (req, res, next) => {
  console.log('/a/b')
  next()
})
app.use('/a/c', (req, res, next) => {
  console.log('/a/c')
  next()
})
app.use('/a', (req, res, next) => {
  console.log('/a again!!')
  next()
})
app.use('/b', (req, res, next) => {
  console.log('/b')
  next()
})
app.use('/c', (req, res, next) => {
  console.log('/c')
  next()
})
app.use('/d', (req, res, next) => {
  console.log('/d')
  next()
})

app.use((req, res) => {
  res.send('Hi! You sent a request to ' + req.originalUrl)
})


app.listen(5888)
