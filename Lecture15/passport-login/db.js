const Sequelize = require('sequelize')

const db = new Sequelize({
  dialect: 'sqlite',
  storage: __dirname + '/users.db'
})

const Users = db.define('user', {
  email: Sequelize.STRING,
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
  },
  fbProfileId: {
    type: Sequelize.STRING,
    unique: true
  },
  fbToken: Sequelize.TEXT
})

module.exports = {
  db,
  Users
}
