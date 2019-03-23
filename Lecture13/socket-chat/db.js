const Sequelize = require('sequelize')

const db = new Sequelize({
  dialect: 'sqlite',
  storage: __dirname + '/chats.db'
})

const Chats = db.define('chat', {
  username: {
    type: Sequelize.STRING(30),
    allowNull: false
  },
  msg: Sequelize.TEXT
})

module.exports = {
  db, Chats
}
