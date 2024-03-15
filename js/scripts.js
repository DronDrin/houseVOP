let loaded = false;

window.addEventListener('load', () => {
    setTimeout(() => document.body.classList.remove('loading'), 10);
    checkScroll();

    document.querySelector('.header__burger')
        .addEventListener('click', () => {
        toggleClass(document.body, 'menu-opened');
    });
});
window.addEventListener('scroll', checkScroll);
window.addEventListener('resize', checkScroll);

function checkScroll() {
    if (window.scrollY > 200 && !loaded) {
        loadMap();
        loadVideo();
        loaded = true;
    }
    if (window.scrollY > 0) addClass(document.body, 'scrolled');
    else rmvClass(document.body, 'scrolled');
}

function loadVideo() {
    let lazyVideo = document.querySelector('#lazy-video');
    lazyVideo.src = lazyVideo.getAttribute('data-src');
    document.querySelector('.video__container').addEventListener('click', e => {
        if (toggleClass(document.querySelector('.video'), 'video_playing'))
            document.querySelector('.video__video').play();
        else
            document.querySelector('.video__video').pause();
    });
}

function loadMap() {
    let map = document.querySelector('#ymap_lazy');
    map.src = map.getAttribute('data-src');
}

function addClass(e, c) {
    if (!e.classList.contains(c)) e.classList.add(c);
}

function rmvClass(e, c) {
    if (e.classList.contains(c)) e.classList.remove(c);
}

function toggleClass(e, c) {
    if (e.classList.contains(c)) {
        e.classList.remove(c);
        return false;
    }
    e.classList.add(c);
    return true;
}
