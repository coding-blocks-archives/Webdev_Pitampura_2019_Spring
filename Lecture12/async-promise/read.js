const fs = require('fs')

fs.readFile(
  __dirname + '/in1.txt',
  (err, data) => {
    if (err) throw err

    console.log(data.toString())
  }
)
