$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        dots: false,
    });
// Go to the next item
    $('.owl-prev').click(function () {
        owl.trigger('next.owl.carousel');
    })
// Go to the previous item
    $('.owl-next').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    });

    $('.vafli').on('click', function () {
        $('.vafli , .header__nav').toggleClass('active')
    });

    $('#tel').inputmask('+\\9\\96 (999) 99 99 99');

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500) {
            $('.go-top').fadeIn('slow')
        } else {
            $('.go-top').fadeOut('slow')
        }
    });

    $('.header__btn, .advantages__btn, .power__button-2, .demo__btn').on('click', function (e) {
        $('.overlay, .popup__book').fadeIn('1')
    });

    $('.header__logIn').on('click', function (e){
        $('.overlay, .popup__logIn').fadeIn('1')
    });

    $('.book__btn, .hero__btn').on('click', function (e){
        e.preventDefault()
        $('.overlay, .popup__thanks').fadeIn('1')
        $('.popup__book').fadeOut('1')
    });



    $('.popup__close').on('click', function () {
        $('.overlay, .popup__book, .popup__logIn, .popup__thanks').fadeOut('slow')
    });

    $('.overlay').on('click', function (e) {
        if (e.target.className === 'overlay') {
            $('.overlay, .popup__book, .popup__logIn, .popup__thanks').fadeOut('slow')
        }
    });
});
