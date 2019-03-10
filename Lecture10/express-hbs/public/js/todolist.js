$(() => {

  function refreshList() {
    $.get('/tasks?mode=json', (data) => {
      $('#tasklist').empty()

      for (let item of data) {
        $('#tasklist').append(
          $('<li>').text(item.priority + ' ' + item.task)
        )
      }

    })
  }

  refreshList()

  $('#addtask').click((ev) => {
    ev.preventDefault();
    $.post(
      '/tasks?mode=json',
      {
        task: $('#task').val(),
        priority: $('#priority').val()
      },
      (data) => {
        if (data.success) {
          refreshList()
        }
      }
    )
  })


})
