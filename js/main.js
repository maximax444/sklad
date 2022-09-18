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