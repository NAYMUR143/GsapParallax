gsap.timeline({
    scrollTrigger: {
        trigger: '.section-part1',
        scrub: true,
        start: 'top top',
        end: '+=2000',
        pin: true,
    }
})
    .to('.img3', 2, {
        y: innerHeight * 1,
        width: '200%',
        height: '200vh',
        opacity: 0
    }, '-=4')
    .to('.img2', 2, {
        y: innerHeight * -1,
        width: '200%',
        height: '200vh',
        opacity: 0
    }, '-=4')
    .to('.img1', 4, {
        x: -400,
        y: -500,
        width: '200%',
        height: '200vh',
        opacity: 0
    })
    .to('.image', 4, {
        autoAlpha: 0
    })
    .to('.image3', 4, {
        autoAlpha: 0
    })
    .from('.image2', 4, {
        autoAlpha: 0
    })
    .to('.title', 2, {
        opacity: 1
    })