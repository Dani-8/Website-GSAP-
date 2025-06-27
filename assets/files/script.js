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





gsap.registerPlugin(ScrollTrigger);

// const scrollTween = gsap.to(".fourth img", {
//     xPercent: 100,
//     x: () => window.innerWidth,
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".fourth",
//         // pin: ".fourth",
//         start: "left left",
//         // end: () => `+=${document.querySelector(".fourth").offsetWidth} bottom`,
//         scrub: 1,
//         markers: true,
//     }
// });

// gsap.to(".one", {
//     scale: 2,
//     rotation: 360,
//     scrollTrigger: {
//         trigger: ".one",
//         containerAnimation: scrollTween,
//         start: "right 40%",
//         end: "right 0%",
//         scrub: 1,
//         markers: true,
//     }
// });

// gsap.to(".two", {
//     scale: 2,
//     rotation: 360,
//     scrollTrigger: {
//         trigger: ".two",
//         containerAnimation: scrollTween,
//         start: "right 50%",
//         end: "right 70%",
//         scrub: 1,
//         markers: true,
//     }
// });

// gsap.to(".thr", {
//     scale: 2,
//     rotation: 360,
//     scrollTrigger: {
//         trigger: ".thr",
//         containerAnimation: scrollTween,
//         start: "right 80%",
//         end: "right 100%",
//         scrub: 1,
//         markers: true,
//     }
// });




gsap.registerPlugin(ScrollTrigger);

const scrollTween = gsap.to(".fourth img", {
    xPercent: -80,
    x: () => window.innerWidth,
    ease: "none",
    scrollTrigger: {
        trigger: ".fourth",
        pin: ".fourth",
        start: "left left",
        end: () => `+=${document.querySelector(".fourth").offsetWidth} bottom`,
        scrub: 1,
        markers: true,
    }
});

gsap.to(".one", {
    scale: 2,
    rotation: 360,
    scrollTrigger: {
        trigger: ".one",
        containerAnimation: scrollTween,
        start: "rgith 80%",
        end: "left 20%",
        scrub: 1,
        markers: true,
    }
});

gsap.to(".two", {
    scale: 2,
    rotation: 360,
    scrollTrigger: {
        trigger: ".two",
        containerAnimation: scrollTween,
        start: "left 80%",
        end: "left 20%",
        scrub: 1,
        markers: true,
    }
});

gsap.to(".thr", {
    scale: 2,
    rotation: 360,
    scrollTrigger: {
        trigger: ".thr",
        containerAnimation: scrollTween,
        start: "left 80%",
        end: "left 20%",
        scrub: 1,
        markers: true,
    }
});

















