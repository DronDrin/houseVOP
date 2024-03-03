let scrollY = 0;
let animatingScroll = false;
let firstBlockHeight;
$(window).on('load', () => {
    $(window).on('scroll', checkScroll);
    $(window).on('resize', checkScroll);
    setTimeout(() => $(document.body).removeClass('loading'), 10);
    checkScroll();

    $('.header__burger').on('click', () => {
        $(document.body).toggleClass('menu-opened');
    });


    $('.video__container').on('click', e => {
        $('.video').toggleClass('video_playing');
        if ($('.video').hasClass('video_playing')) {
            $('.video__video').get(0).play();
        } else {
            $('.video__video').get(0).pause();
        }
    });


});

function checkScroll() {
    if ($(window).scrollTop() > 200) {
        loadMap();
    }
    if (animatingScroll) {
        scrollY = $(window).scrollTop();
        return;
    }
    firstBlockHeight = $(window).innerHeight() - 123;
    let scrollingUp = scrollY - $(window).scrollTop() > 0;
    if ($(window).scrollTop() > 20
        && $(window).scrollTop() < firstBlockHeight - 20) {
        animatingScroll = true;
        $('html,body').animate({
            scrollTop: scrollingUp ? 0 : firstBlockHeight
        }, 'slow', '', () => {
            setTimeout(() => animatingScroll = false, 10);
        });
        if (scrollingUp) {
            setTimeout(() => $(document.body).removeClass('scrolled'), 70);
        }
    }
    scrollY = $(window).scrollTop();
    $(document.body).toggleClass('scrolled', $(window).scrollTop() > 0);
}

function loadMap() {
    $('#ymap_lazy').attr('src', $('#ymap_lazy').attr('data-src'));
}
