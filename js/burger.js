function handleResize() {
    var width = window.innerWidth;
    var borderwidth = 1200;

    if (width <= borderwidth) {
        document.getElementById('nav1').style.display = 'none';
        document.getElementById('burger').style.display = 'block';


    } else {
        document.getElementById('nav1').style.display = 'block';
        document.getElementById('burger').style.display = 'none';
    }
};

window.addEventListener('load', handleResize);
window.addEventListener('resize', handleResize);

var burger = document.getElementById('burger');
var nav = document.getElementById('nav2');

burger.addEventListener("click", () => {
    burger.classList.toggle("toggle");
    nav.classList.toggle("nav-active");

});