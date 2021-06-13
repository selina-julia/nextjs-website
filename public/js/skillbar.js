(function ($) {
    $(window).scroll(function () {
        var hT = $('#skill-bar-wrapper').offset().top,
            hH = $('#skill-bar-wrapper').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT + hH - 1.4 * wH)) {
            $(document).ready(function () {
                $('.skillbar-container').each(function () {
                    $(this).find('.skills').animate({
                        width: $(this).attr('data-percent')
                    }, 3000); // 3 seconds
                });
            });
        }
    });
})(jQuery);
