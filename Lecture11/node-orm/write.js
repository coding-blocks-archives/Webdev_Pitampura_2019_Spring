const {
  db,
  Users
} = require('./dbconfig')

db.sync()
  .then(() => Users.create({
    username: 'ag3456',
    email: 'a4@cb.lk',
    password: 'kjhkjbkjb'
  }))
  .then((user) => {
    console.log(user)
  })
  .catch(console.error)
