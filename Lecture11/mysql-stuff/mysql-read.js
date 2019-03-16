const mysql = require('mysql2')


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'sampleuser4',
  password: 'samplepass4',
  database: 'sampledb4'
})


connection.query(
  `SELECT * FROM test1`,
  (err, results, fields) => {
    if (err) {
      console.error(err)
    } else {
      console.log(results)
      console.log(fields)
    }
  }
)
