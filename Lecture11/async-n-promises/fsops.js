const fs = require('fs')

const FILE_NAME = __dirname + '/file.txt'

fs.writeFile(
  FILE_NAME,
  'some data here',
  (err) => {
    if (err) throw err

    console.log('file written')
  }
)

console.log('file write done')
