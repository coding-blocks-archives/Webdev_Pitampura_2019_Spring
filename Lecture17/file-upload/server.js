const express = require('express')
const multer = require('multer')

const uploads = multer({
  dest: __dirname + '/uploads',
})

const app = express()

let fileNames = {}

app.use('/', express.static(__dirname + '/public'))

app.post('/submit', uploads.single('image'), (req, res) => {
  console.log('======== FILE =========')
  console.log(req.file)
  console.log('======== BODY =========')
  console.log(req.body)

  fileNames[req.body.imagename] = {
    path: req.file.path,
    mimetype: req.file.mimetype
  }

  res.redirect('/')
})

app.get('/image/:name', (req, res) => {
  res.sendFile(fileNames[req.params.name].path, {
    headers: {
      'Content-Type': fileNames[req.params.name].mimetype,
    },
  })
})

app.listen(9888, () => {
  console.log('Started on http://localhost:9888')
})
