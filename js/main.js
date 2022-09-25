$('.home-qa__name').on('click', function () {
    $(this).closest('.home-qa__block').toggleClass('active');
    if ($(this).closest('.home-qa__block').hasClass('active')) {
        $(this).closest('.home-qa__block').find('.home-qa__cont').slideDown();
    } else {
        $(this).closest('.home-qa__block').find('.home-qa__cont').slideUp();
    }

});
(function ($) {
    $(function () {

        $('.home-price__tabs').on('click', 'a:not(.active)', function (e) {
            e.preventDefault();
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.home-price').find('.home-price__cont-block').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);
(function ($) {
    $(function () {

        $('.home-reviews__tabs').on('click', 'a:not(.active)', function (e) {
            e.preventDefault();

            $(this).closest('.home-reviews').find('.home-reviews__cont-block').removeClass('active').eq($(this).index()).find('.frame__wrap').sly('init');
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.home-reviews').find('.home-reviews__cont-block').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);
(function ($) {
    $(function () {

        $('.reviews__tabs').on('click', 'a:not(.active)', function (e) {
            e.preventDefault();

            $(this).closest('.reviews').find('.reviews__cont-block').removeClass('active').eq($(this).index()).find('.frame__wrap').sly('init');
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.reviews').find('.reviews__cont-block').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);
var $frame = $('.frame__wrap');
var $slidee = $('.frame');
var $wrap = $frame.parent();
$frame.each(function () {
    $(this).sly({
        horizontal: 1,
        itemNav: 'basic',
        smart: 1,
        activateOn: 'click',
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing: 1,
        startAt: 0,
        scrollBy: 1,
        speed: 3000,
        elasticBounds: 1,
        easing: 'easeOutExpo',
        dragHandle: 1,
        dynamicHandle: 1,
        clickBar: 1
    });
});