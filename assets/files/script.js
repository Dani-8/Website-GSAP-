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














// Image visibility tied to letter positions
gsap.to(".one", {
    opacity: 1,
    scrollTrigger: {
        trigger: ".fourth",
        scroller: "body",
        start: "top 0%", // Show when 'X' is visible
        end: "top -20%", // Hide when 'X' moves out
        scrub: 2,
    }
});

gsap.to(".two", {
    opacity: 1,
    scrollTrigger: {
        trigger: ".fourth",
        scroller: "body",
        start: "top -30%", // Show when 'R-T' is visible
        end: "top -50%", // Hide when 'R-T' moves out
        scrub: 2,
    }
});

gsap.to(".thr", {
    opacity: 1,
    scrollTrigger: {
        trigger: ".box1",
        start: "left 70%",
        end: "left 30%",
        horizontal: true,
        scrub: true
    }
});























