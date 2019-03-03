$(() => {

  function refreshList(todos) {
    $('#tasklist').empty()

    todos.forEach((todo) => {
      $('#tasklist').append(
        $('<li>').text(todo)
      )
    })
  }

  $.get(
    '/todos',
    (data) => {
      refreshList(data)
    }
  )


  $('#addtask').click(() => {

    $.post(
      '/todos',
      {todo: $('#newtask').val()},
      (data) => {
        console.log(data)
        refreshList(data)
      }
    )
    console.log('post done')
  })


})
