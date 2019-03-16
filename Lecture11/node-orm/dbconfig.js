const Sequelize = require('sequelize')


const db = new Sequelize({
  dialect: 'sqlite', // sqlite, postgres, msssql
  // required for sqlite3
  storage: __dirname + '/test.db',


  host: 'localhost',
  username: 'sampleuser4',
  password: 'samplepass4',
  database: 'sampledb4',

  logging: true,

})

const Users = db.define('user', {
  username: {
    type: Sequelize.STRING(50),
    allowNull: false,
    unique: true
  },
  email: {
    type: Sequelize.STRING(60),
    allowNull: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = {
  db, Users
}
