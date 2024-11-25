document.addEventListener("DOMContentLoaded", function() {
     $('#thx').hide();
});

$('#gform').on('submit', function(e) {
  $('#gform').hide();
    $('#thx').show();

    //$('#gform').prepend('Your submission has been processed...');
  });
