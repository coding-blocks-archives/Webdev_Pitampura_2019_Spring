const express = require('express')
const http = require('http')
const app = express()
const server = http.Server(app)
const socketio = require('socket.io')

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

    // save the messages to a db

    io.emit('chat_rcvd', {
      username: idUsernameMap[socket.id],
      msg: data.msg
    })
  })
})

app.use('/', express.static(__dirname + '/public'))

server.listen(2323, () => {
  console.log('Server started on http://localhost:2323')
})
