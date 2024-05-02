document.querySelector('.menu-toggle').addEventListener('click', function() {
    const nav = document.querySelector('.main-nav ul');
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
});
    

document.addEventListener("DOMContentLoaded", function() {
     $('#thx').hide();
});

$('#gform').on('submit', function(e) {
  $('#gform').hide();
    $('#thx').show();

    //$('#gform').prepend('Your submission has been processed...');
  });