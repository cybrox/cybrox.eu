$(document).ready(function() {
    $("html,body").scrollTop(0);

    window.usualHeight = $('.page-wrapper').outerHeight();
    window.multiplier  = ($(window).innerWidth() > 1000) ? 0.75 : 0.00;
    window.mainHeight  = $(window).outerHeight();

    $('.page-footer').css('margin-top', ($(window).innerHeight() * multiplier + 50) + 'px');

    $(window).on('scroll', function() {
        if (($(window).scrollTop() + $(window).height() > window.usualHeight) &&
            ($(window).scrollTop() !== 0)) {
            $('body').addClass('squashed');
        } else {
            $('body').removeClass('squashed');
        }
    });

    $(window).resize(function() {
        window.usualHeight = $('.page-wrapper').outerHeight();
        window.multiplier  = ($(window).innerWidth() > 1000) ? 0.75 : 0.00;
        window.mainHeight  = $(window).outerHeight();

        $('.page-footer').css('margin-top', ($(window).innerHeight() * multiplier + 50) + 'px');
    });

    $('.page-down-click').click(function() {
        $('html, body').animate({
          scrollTop: window.mainHeight * multiplier + 20
        }, 500);
    })
});
