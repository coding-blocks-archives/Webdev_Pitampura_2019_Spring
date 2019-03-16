const {
  db,
  Users
} = require('./dbconfig')

db.sync()
  .then(() => Users.findAll({
    // where: {
    //   username: 'ag123'
    // }
  }))
  .then((users) => {
    for (let u of users) {
      console.log(u.username)
    }
  })
  .catch(console.error)
