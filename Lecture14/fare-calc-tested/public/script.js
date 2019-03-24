$(() => {
  $('#calc').click(() => {

    $.post('/calc', {
      km: parseFloat($('#km').val()),
      min: parseInt($('#min').val())
    }, (data) => {
      $('#fare').text(`Fare: ₹${data.fare}`)
    })
  })
})
