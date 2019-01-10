let mainNav = document.getElementById('menu');

let navBarToggle = document.getElementById('toggle');

navBarToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
});

window.onscroll = function(){scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 680 || document.documentElement.scrollTop > 680) {
        document.getElementById("navbar").style.backgroundColor = "#062F4F";
    } else {
        document.getElementById("navbar").style.backgroundColor = "#4ABDAC";
    }
}