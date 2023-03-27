/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// $('.color-on-hover').addClass('colored')
$('.color-on-hover').hover(
    function(){ $(this).addClass('colored') },
    // function(){ $(this).removeClass('colored') }
)

$("a").not(".navbar a").attr("target", "_blank");
$("a").not(".navbar a").attr("rel", "noopener noreferrer");

$(".project-image-vert img, .project-image-horiz img").wrap("<div class='image-box rounded'></div>");

function randomFromInterval(min, max) { // min and max included
    return Math.random() * (max - min + 1) + min;
}

const randGreen = randomFromInterval(80, 150);
const randBlue = randomFromInterval(100, 180);

// change color with scroll
const height = document.body.scrollHeight;
setInterval(() => {
    const curr = window.pageYOffset;
    const newVal = (curr / height) * 150;

    $(":root").get(0).style.setProperty("--bs-primary-rgb", newVal + ", " + randGreen + ", " + randBlue); // 106, 177

}, 50);

// enable image modals
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});