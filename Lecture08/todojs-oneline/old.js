function doneClicked(itemId) {
  console.log(`clicked ${itemId}`)
}

function clicked(ev) {
  let id = $(ev.target).attr('item-id')
  console.log('clicked ' + id)
}

$(() => {

  for (let i = 0; i < 10; i++) {
    $('#list').append(
      $('<li>')
        .text(Math.random())
        // .attr('onclick', `doneClicked(${i})`)
        .attr('item-id', i)
        .click(clicked)
    )
  }
})
