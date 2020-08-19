const navBtn = document.querySelector('.nav-toggler');
const navBar = document.querySelector('.navbar');

navBtn.addEventListener('click', () => {
    navBar.classList.toggle('hidden');
})
