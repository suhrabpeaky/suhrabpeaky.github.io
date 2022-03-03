let moon = document.getElementById('moon');
let stars = document.getElementById('stars');
let mountainsBack = document.getElementById('mountains-back');
let mountainsFront = document.getElementById('mountains-front');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    moon.style.top = value * 0.75 + 'px';
    stars.style.left = value * 0.25 + 'px';
    stars.style.top = value * - 0.25 + 'px';
    mountainsBack.style.top = value * 0.25 + 'px';
    mountainsFront.style.top = value * 0 + 'px';
    text.style.marginRight = value * 5 + 'px';
    text.style.marginTop = value * 1.05 + 'px';
    btn.style.marginTop = value * 1.25 + 'px';
    header.style.top = value * 0.5 + 'px';
});


