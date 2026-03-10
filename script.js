
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.mobile-sidebar');

hamburger.addEventListener('click', () => {
    // hamburger.classList.toggle('active');
    sidebar.classList.toggle('active');
});

