document.querySelector('.menu-toggle').addEventListener('click', function() {
    const nav = document.querySelector('.main-nav ul');
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
});
