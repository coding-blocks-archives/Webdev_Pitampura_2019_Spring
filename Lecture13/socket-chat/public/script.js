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
    loadOldChats()
  })

  $('#send').click(() => {
    socket.emit('chat', {
      msg: $('#msg').val()
    })
  })

  function addChat(chatObj) {
    $('#chats').append(
      $('<li>').text(
        `${chatObj.username}: ${chatObj.msg}`
      )
    )
  }

  function loadOldChats () {
    $.get('/chats', (chats) => {
      for (let chat of chats)  {
        addChat(chat)
      }
    })
  }

  socket.on('chat_rcvd', addChat)

})
