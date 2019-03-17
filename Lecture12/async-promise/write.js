const fs  = require('fs')

fs.writeFile(
  __dirname + '/sorted.txt',
  ([3,6,8,2,4]).join('\n'),
  (err) => {
    if (err) throw err

    console.log('Data written')
  }
)
