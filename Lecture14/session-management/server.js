const express = require('express')
const session = require('express-session')
const app = express()

app.use((req, res, next) => {
  console.log(req.session)
  next()
})

app.use(session({
  secret: "long random key that you don't tell anyone",
  resave: false,
  saveUninitialized: true
}))

app.use((req, res, next) => {
  console.log(req.session)
  next()
})


app.get('/hi', (req, res) => {
  if (!req.session.hiCounter) {
    req.session.hiCounter = 1
  } else {
    req.session.hiCounter++
  }

  if (req.session.byeCounter && req.session.byeCounter > 1) {
    return res.send('Welcome Back!')
  }


  res.send('Hello World!')
})

app.get('/bye', (req, res) => {
  if (!req.session.hiCounter) {
    return res.redirect('/hi')
  }

  if (!req.session.byeCounter) {
    req.session.byeCounter = 1
  } else {
    req.session.byeCounter++
  }

  res.send('See you again!')
})

app.listen(9876, () => {
  console.log(`Server started on
  http://localhost:9876`)
})
