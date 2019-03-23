const express = require('express')
const http = require('http')
const app = express()
const server = http.Server(app)
const socketio = require('socket.io')

const {
  db,
  Chats
} = require('./db')

const io = socketio(server)

const idUsernameMap = {}


io.on('connection', (socket) => {
  console.log('Socket connected ' + socket.id)

  socket.on('login', (data) => {
    idUsernameMap[socket.id] = data.username
    socket.emit('logged_in')
  })

  socket.on('chat', (data) => {
    console.log('chat received ' + data.msg)

    const chatObj = {
      username: idUsernameMap[socket.id],
      msg: data.msg
    }
    // not awaiting, let  it do in background
    Chats.create(chatObj)

    io.emit('chat_rcvd', chatObj)
  })
})

app.use('/', express.static(__dirname + '/public'))

app.get('/chats', async (req, res) => {
  const chats = await Chats.findAll()
  res.send(chats)
})

db.sync()
  .then(() => {
    server.listen(2323, () => {
      console.log('Server started on http://localhost:2323')
    })
  })
  .catch(console.error)
