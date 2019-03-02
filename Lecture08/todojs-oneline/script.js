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
        $('#tasklist').prepend(
            $('<li>')
            .append(
              $('<button>')
              .text('❌')
              .click((ev) => {
                $(ev.target).parent().remove()
              })
            )
            .append(
              $('<button>')
              .attr('class', 'btn-up')
              .text('⬆️')
              .click((ev) => {
                $(ev.target).parent().insertBefore(
                  $(ev.target).parent().prev()
                )
              })
            )
            .append(
              $('<button>')
              .attr('class', 'btn-down')
              .text('⬇️')
              .click((ev) => {
                $(ev.target).parent().insertAfter(
                  $(ev.target).parent().next()
                )
              })
            )
            .append(
              $('<span>')
              .text($('#newtask').val())
            )
          )
          .prev().prev().val('')
      })
    )
    .append(
      $('<ul>')
      .attr('id', 'tasklist')
    )
})
