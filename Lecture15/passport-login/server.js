const express = require('express')
const {
  db
} = require('./db')
const session = require('express-session')
const passport = require('./passport')

const app = express()
app.set('view engine', 'hbs')

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.use(session({
  secret: 'h24b5jh245bk24',
  resave: false,
  saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/login', require('./routes/login'))
app.use('/signup', require('./routes/signup'))
app.use('/profile', require('./routes/profile'))

db.sync()
  .then(() => {

    app.listen(9988, () => {
      console.log('Started on http://localhost:9988')
    })

  })
