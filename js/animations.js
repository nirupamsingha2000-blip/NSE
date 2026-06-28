// Hero Entrance Animation

window.addEventListener("load", () => {

    const tl = gsap.timeline();

    tl.from("nav", {
        y: -100,
        opacity: 0,
        duration: 1
    })

    .from(".hero-badge", {
        y: 30,
        opacity: 0,
        duration: 0.6
    })

    .from(".hero h1", {
        y: 60,
        opacity: 0,
        duration: 0.8
    })

    .from(".hero p", {
        y: 40,
        opacity: 0,
        duration: 0.6
    })

    .from(".hero-buttons", {
        y: 40,
        opacity: 0,
        duration: 0.6
    })

    .from(".atom", {
        scale: 0,
        rotation: 360,
        duration: 1.5,
        ease: "back.out(1.7)"
    });

});
