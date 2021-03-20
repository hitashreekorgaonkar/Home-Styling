$(document).ready(function () {
    $(".modal").modal();
    $(".sidenav").sidenav();
    $(".slider").slider({ fullWidth: true })
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });
    $('.parallax').parallax();
    $('.testimonials').carousel({
        numVisible: 7,
        shift: 50,
        padding: 55
    })
});

