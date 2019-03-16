const sqlite = require('sqlite3')

const db = new sqlite.Database(__dirname + '/test.db')

db.serialize(() => {
  db.run('CREATE TABLE test1 (id integer primary_key, name text)');

  db.run(`INSERT INTO test1 VALUES(1, "HELLO")`)
})
