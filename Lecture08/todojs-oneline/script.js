$(() => {
  $(document.body)
    .append(
      $('<input>')
        .attr('id', 'newtask')
    )
    .append(
      $('<button>')
        .text('ADD')
        .click(() => {
          $('#tasklist').append(
            $('<li>')
              .text($('#newtask').val())
          )
        })
    )
    .append(
      $('<ul>')
        .attr('id', 'tasklist')
    )
})
