
function check(){
    var pan = $('#pan').val()
    var match = /^([A-Z]{5}[0-9]{4}[A-Z]{1})$/;
    if (pan.match(match)) {
        var result = document.querySelector('.result')
        result.innerHTML = 'Valid PAN Card'
        $('.result').css('color','green')
    } else {
      var result = document.querySelector('.result')
      result.innerHTML = 'Invalid PAN Card'
      $('.result').css('color', 'red')
    }
}

$(document).ready(function () {
  $('form').on('submit', (e) => {
    e.preventDefault()
  })
})
