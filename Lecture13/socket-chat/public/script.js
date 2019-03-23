const socket = io()

socket.on('connect', () => {
  console.log('Socket created ' + socket.id)
})



$(() => {
  $('#chatbox').hide()

  $('#login').click(() => {
    socket.emit('login', {
      username: $('#username').val()
    })
  })

  socket.on('logged_in', () => {
    $('#loginform').hide()
    $('#chatbox').show()
  })

  $('#send').click(() => {
    socket.emit('chat', {
      msg: $('#msg').val()
    })
  })

  socket.on('chat_rcvd', (data) => {
    $('#chats').append(
      $('<li>').text(
        `${data.username}: ${data.msg}`
      )
    )
  })

})
