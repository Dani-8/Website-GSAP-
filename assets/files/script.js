gsap.registerPlugin(SplitText);

gsap.set("#heading", { opacity: 1    });

let split = SplitText.create("#heading", { type: "chars" });
//now animate each character into place from 20px below, fading in:
gsap.from(split.chars, {
    duration: 1,
    delay: 1,
    y: 40,
    autoAlpha: 0,
    stagger: 0.08
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



gsap.registerPlugin(ScrollTrigger);




// gsap.to(".fourth h1", {
//     xPercent: -450,
//     scrollTrigger: {
//         trigger: ".fourth",
//         scroller: "body",
//         markers: true,
//         start: "top 0%",
//         end: "top -100%",
//         scrub: 2,
//         pin: true
// }
// })

// ScrollTrigger.create({
//         trigger: ".fourth",
//         // scroller: "body",
//         markers: true,
//         start: "top top",
//         end: "top -100%",
//         scrub: 1,
//         pin: true,

//         onUpdate: (self) => {
//         gsap.to(".fourth h1, .fourth img", {
//                 x: `${-220 * self.progress}vw`,
//                 // xPercent: -150,
//                 ease: "power3.inOut",
//                 duration: 2,
//             })
//         }
// })





gsap.to(".scroll-content", {
    xPercent: -450,
    ease: "none",
        scrollTrigger: {
        trigger: ".fourth",
        start: "top top",
        end: "top -100%",
        scrub: 1,
        pin: true,
        markers: true
    }
});






gsap.to(".scroll-content img", {
    xPercent: -150, // subtle movement
    ease: "power1.out",
    scrollTrigger: {
        trigger: ".fourth",
        start: "top",
        end: "top -100%",
        scrub: 1,
        markers: true,
        }
});




// const scrollTween = gsap.to(".pg-heading img", {
//     xPercent: -100,
//     x: () => -window.innerWidth,
//     ease: "power3.inOut",
//     scrollTrigger: {
//         trigger: ".fourth",
//         start: "top 0%",
//         end: "top -100%",
//         // start: "left left",
//         // end: () => `+=${document.querySelector(".pg-heading").offsetWidth} right`,
//         scrub: 1,
//         markers: true,
//     }
// });
















