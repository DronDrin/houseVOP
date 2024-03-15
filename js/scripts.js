let loaded = false;

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
        if ($('.video').hasClass('video_playing'))
            $('.video__video').get(0).play();
        else $('.video__video').get(0).pause();
    });


});

function checkScroll() {
    if ($(window).scrollTop() > 200 && !loaded) {
        loadMap();
        loadVideo();
        loaded = true;
    }
    $(document.body).toggleClass('scrolled', $(window).scrollTop() > 0);
}

function loadVideo() {
    $('#lazy-video').attr('src', $('#lazy-video').attr('data-src'));
}

function loadMap() {
    $('#ymap_lazy').attr('src', $('#ymap_lazy').attr('data-src'));
}
