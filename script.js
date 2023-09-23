const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


gsap.from('nav',{
    y:'-90',
    duration:.5,
    delay:.5,
})
gsap.from('.page-bot', {
    opacity : 0,
    duration:.5,
    delay:.5,
})