
function check(){
    var pan = $('#pan').val()
    console.log(pan);
    var match = /^([A-Z]{5}\[0-9]{4}\[A-Z]{1})/g;
    if (pan.match(match)) {
      alert('Valid')
    } else {
        console.log(pan.match(match))
      alert('Invalid')
    }
}

$(document).ready(function () {
  $('form').on('submit', (e) => {
    e.preventDefault()
  })
})