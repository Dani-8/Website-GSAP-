gsap.registerPlugin(SplitText);

gsap.set("#heading", { opacity: 1 });

let split = SplitText.create("#heading", { type: "chars" });
//now animate each character into place from 20px below, fading in:
gsap.from(split.chars, {
    duration: 1,
    delay: 1,
    y: 20,
    autoAlpha: 0,
    stagger: 0.05
});





gsap.from(".sec-video", {
    scale: 0.4,
    duration: 5,    
    scrollTrigger: {
        trigger: ".video",
        start: "top 80%",
        end: "top 10%",
        scrub: 2,
        markers: true,
    }


})







gsap.to(".fourth h1", {
    xPercent: -180,
    scrollTrigger: {
        trigger: ".fourth",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true
}
})










// gsap.to(".pg-heading", {
//     xPercent: -80,
//     scrollTrigger: {
//         trigger: ".fourth",
//         scroller: "body",
//         markers: true,
//         start: "left 0%",
//         // end: "top -100%",
//         scrub: 2,
//         pin: true,
//     }
// });

gsap.to(".one", {
    scale: 2,
    rotation: 360,
    scrollTrigger: {
        trigger: ".one",
        containerAnimation: gsap.to(".one", { xPercent: 40 }),
        start: "left 30%",
        end: "left 30%",
        scrub: 2,
    }
});

gsap.to(".two", {
    scale: 2,
    rotation: 360,
    scrollTrigger: {
        trigger: ".two",
        // containerAnimation: gsap.to(".fourth", { xPercent: -50 }),
        start: "left 50%",
        end: "left 30%",
        scrub: 2,
    }
});

gsap.to(".thr", {
    scale: 2,
    rotation: 360,
    scrollTrigger: {
        trigger: ".thr",
        // containerAnimation: gsap.to(".fourth", { xPercent: -80 }),
        start: "left 80%",
        end: "left 20%",
        scrub: 2,
    }
});






















