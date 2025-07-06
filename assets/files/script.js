var cursor = document.querySelector(".cursor")
var card = document.querySelector(".card")


document.addEventListener("mousemove", function(dets){
    let scale = 1
    let opacity = 0

    if (dets.target.closest(".card-img, .card-video")){
        opacity = 1
        scale = 3
        cursor.innerHTML = '<i class="ri-arrow-right-line"></i>'


    } else{
        cursor.innerHTML = ""
    }



    gsap.to(cursor, {
        x:dets.x,
        y:dets.y,
        scale: scale,
        opacity: opacity,
        duration:0.6,
        ease: "back.out"
        

    })


})


// Register GSAP plugins
        gsap.registerPlugin(ScrollTrigger);

        // Function to handle the line-by-line text reveal animation
        function animateTextLines(targetSelector) {
            const headingElement = document.querySelector(targetSelector);

            // Check if the element exists to prevent errors
            if (!headingElement) {
                console.warn(`Element with selector '${targetSelector}' not found. Skipping animation.`);
                return;
            }

            // Initialize SplitType on the heading to break it into lines
            // 'types: "lines"' tells SplitType to create a <div> for each line
            const splitText = new SplitType(headingElement, { types: 'lines' });

            // Set the initial state of each line:
            // y: 100 means move it down by 100 pixels
            // opacity: 0 means make it completely transparent
            // overflow: hidden on the parent (h1) ensures lines don't show before animating
            gsap.set(splitText.lines, { y: '200', opacity: 0 });

            // Create the animation timeline
            gsap.to(splitText.lines, {
                y: '0',         // Animate back to its original Y position
                opacity: 1,      // Animate to full opacity
                stagger: 0.3,    // Each line animates 0.1 seconds after the previous one
                duration: 1,   // Duration for each individual line's animation
                ease: 'back.out', // A smooth easing function

                // Attach ScrollTrigger to this animation
                scrollTrigger: {
                    trigger: headingElement, // The element that triggers the animation
                    start: 'top 40%',        // Animation starts when the top of the heading hits 80% from the top of the viewport
                    end: 'bottom 20%',       // Animation completes when the bottom of the heading hits 20% from the top of the viewport
                    markers: true, // Uncomment for debugging to see ScrollTrigger start/end points
                }
            });
        }

        // Call the animation function for your heading
        // Make sure the selector matches your HTML structure
        animateTextLines('.sec-text h1');


        gsap.registerPlugin(ScrollTrigger);

        // Function to handle the line-by-line text reveal animation
        function animateTextLines(targetSelector) {
            const headingElement = document.querySelector(targetSelector);

            // Check if the element exists to prevent errors
            if (!headingElement) {
                console.warn(`Element with selector '${targetSelector}' not found. Skipping animation.`);
                return;
            }

            // Initialize SplitType on the heading to break it into lines
            // 'types: "lines"' tells SplitType to create a <div> for each line
            const splitText = new SplitType(headingElement, { types: 'lines' });

            // Loop through each line and create a separate animation with its own ScrollTrigger
            splitText.lines.forEach((line, index) => {
                // Set the initial state of each individual line:
                // y: '100%' means move it down by 100% of its own height
                // opacity: 0 means make it completely transparent
                gsap.set(line, { y: '100%', opacity: 0 });

                // Create the animation for this specific line
                gsap.to(line, {
                    y: '0%',         // Animate back to its original Y position
                    opacity: 1,      // Animate to full opacity
                    duration: 0.8,   // Duration for this individual line's animation
                    ease: 'power3.out', // A smooth easing function

                    // Attach ScrollTrigger directly to this line's animation
                    scrollTrigger: {
                        trigger: line,           // The individual line itself is the trigger
                        start: 'top 90%',        // Animation starts when the top of the line hits 90% from the top of the viewport
                        end: 'bottom 10%',       // Animation completes when the bottom of the line hits 10% from the top of the viewport
                        toggleActions: 'play none none none', // Play the animation once when triggered
                        markers: true, // Uncomment for debugging to see each line's ScrollTrigger
                    }
                });
            });
        }

        // Call the animation function for your heading
        // Make sure the selector matches your HTML structure
        animateTextLines('.sec-text h1');




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










gsap.from('.row img', {
    scale: 0,
    duration: 0.6,
    delay: .5,
    ease: 'back.out',
    stagger: { each: 0.3, from: 'random' },
    scrollTrigger: {
        trigger: '.grid',
        start: 'top 80%',
        markers: true,
    }
});


