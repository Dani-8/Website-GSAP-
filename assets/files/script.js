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
    xPercent: -150,
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




gsap.utils.toArray(".scroll-content img").forEach((img, i) => {
    gsap.to(img, {
    xPercent: -(100 + i * 30), // each image moves slower/faster
    ease: "power1.out",
    scrollTrigger: {
        trigger: ".fourth",
        start: "top top",
        end: "top -100%",
        scrub: 1,
    }
    });
});











const grid = document.querySelector('.grid');
grid.innerHTML = Array(3).fill().map((_, row) => `
    <div class="row">
    ${Array(4).fill().map((_, col) => {
      const num = row * 4 + col + 1;
    return `<img src="assets/img-video/logos/logo${num}.png" alt="Logo ${num}">`;
    }).join('')}
    </div>
`).join('');


gsap.from('.row img', {
  scale: 0,
  duration: 0.8,
  ease: 'back.out',
  stagger: { each: 0.3, from: 'random' },
  scrollTrigger: {
    trigger: '.grid',
    start: 'top 80%',
    markers: true,
  }
});



