// Select elements once
const cursor = document.querySelector(".cursor");
const card = gsap.utils.toArray('.card');
const cardMediaElements = document.querySelectorAll(".card-img, .card-video");

let mouseX = 0;
let mouseY = 0;

// Function to update cursor position and appearance based on hover
function updateCursor() {
    let isOverMedia = false;
    cardMediaElements.forEach(mediaElement => {
        const rect = mediaElement.getBoundingClientRect();
        if (
            mouseX >= rect.left && mouseX <= rect.right &&
            mouseY >= rect.top && mouseY <= rect.bottom
        ) {
            isOverMedia = true;
        }
    });

    // Animate cursor properties
    gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        scale: isOverMedia ? 3 : 0, // Scale to 3 if over media, 0 if not
        opacity: isOverMedia ? 1 : 0, // Opacity to 1 if over media, 0 if not
        duration: isOverMedia ? 0.8 : 0.8, // Duration for scale/opacity change
        ease: isOverMedia ? "back.out" : "power2.out"
    });

    // Update icon visibility
    cursor.innerHTML = isOverMedia ? '<i class="ri-arrow-right-line"></i>' : '';
}

// Event listeners
document.addEventListener("mousemove", (dets) => {
    mouseX = dets.clientX;
    mouseY = dets.clientY;
    updateCursor(); // Call on mouse move
});

// ScrollTrigger to continuously update cursor state during scroll
ScrollTrigger.create({
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    onUpdate: updateCursor, // Call on every scroll frame
});









// Moved inside the loader's onComplete to ensure it runs AFTER loader
function initializeMainContentAnimations() {
// NAVBAR
// NAVBAR
// NAVBAR
// NAVBAR
// NAVBAR
// NAVBAR


var tlNavbar = gsap.timeline()

var navLogo = document.querySelector(".logo h1")
var navLinks = document.querySelectorAll(".nav-links li")

gsap.set(navLogo, {opacity: 0, y: -100, })
gsap.set(navLinks, {opacity: 0, scale: 0, })


tlNavbar.to(navLogo, {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "back.out"

})
tlNavbar.to(navLinks, {
    scale: 1,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    ease: "back.out(1.5)"
    
}, "-=.5")







// HOME
// HOME
// HOME
// HOME
// HOME
// HOME
// HOME
// HOME




gsap.registerPlugin(SplitText);

gsap.set("#heading", { opacity: 1});

let split = SplitText.create("#heading", { type: "chars" });
//now animate each character into place from 20px below, fading in:
gsap.from(split.chars, {
    duration: 1,
    delay: 1.8,
    y: 50,
    autoAlpha: 0,
    stagger: { each: 0.2, from: 'random' },
});




}





// --- LOADER ANIMATION ---
document.addEventListener("DOMContentLoaded", () => {
    const loaderOverlay = document.querySelector(".loader-overlay");
    const loaderBars = document.querySelectorAll(".loader-bar");
    const loaderLogos = document.querySelectorAll(".loader-logo"); // Select the new logo elements

    const loaderTl = gsap.timeline({
        onComplete: () => {
            // Once loader animation is complete, hide the overlay
            gsap.set(loaderOverlay, { display: "none" });
            // IMPORTANT: Initialize main content animations ONLY AFTER loader is done
            initializeMainContentAnimations();
        }
});

    // Sequence: Logos appear one by one -> Logos disappear one by one -> Bars shrink -> Overlay fades
    loaderTl
        .to(loaderOverlay, { opacity: 1, duration: 0.1 }); // Ensure overlay is fully opaque

    // Loop through each logo to create sequential appear/disappear animations
    loaderLogos.forEach((logo, index) => {
        loaderTl.fromTo(logo, // Animate logo in
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration: 0.3, ease: "back.out" }
        )
        .to(logo, { // Animate logo out
            opacity: 0,
            scale: .2,
            duration: 0.1,
            ease: "power1.in"
        }, "-=0"); // Wait 0.2 seconds after appearing before disappearing
    });


        loaderTl.fromTo(loaderBars, // Animate bars to shrink from 100% height to 0%
            { scaleY: 1 }, // Start with full height (scaleY 1)
            {
                scaleY: 0, // Shrink to 0 height
                // stagger: 0.1, // Stagger each bar's animation
                duration: 0.8,
                stagger: { each: 0.1, from: 'center' },

                ease: "power2.inOut"
            }, "+=0.2") // Start bars animation 0.2 seconds *after* welcome message finishes fading out
        .to(loaderOverlay, { // Fade out the entire overlay (to reveal content)
            // opacity: 0,
            duration: 0.5, // Duration for overlay fade out
            ease: "power2.out"
        }, "<0.3"); // Start overlay fade 0.3 seconds *before* the bars finish moving up (overlap for smoothness)
});















  // Initialize Lenis
        const lenis = new Lenis({
            duration: 2, // How long the scroll animation takes (in seconds)
            easing: (t) => Math.min(1, 1 - Math.pow(1 - t, 4)), // Custom easing function
            direction: 'vertical', // vertical, horizontal
            gestureDirection: 'vertical', // vertical, horizontal, both
            smoothWheel: true, // Enable smooth scrolling for mouse wheel
            smoothTouch: false, // Disable smooth scrolling for touch devices (often preferred for native feel)
            touchMultiplier: 2, // How much to multiply touch scroll speed
        });

        // Function to run on each animation frame to update Lenis
        function raf(time) {
            lenis.raf(time); // Update Lenis with the current time
            requestAnimationFrame(raf); // Request the next animation frame
        }

        // Start the animation loop
        requestAnimationFrame(raf);

        // Optional: Integrate with GSAP's ticker if you're using GSAP animations
        // This ensures GSAP animations are perfectly synchronized with Lenis's scroll
        // gsap.ticker.add((time) => {
        //     lenis.raf(time * 1000); // Lenis expects milliseconds
        // });
        // gsap.ticker.lagSmoothing(0); // Disable GSAP's lag smoothing if Lenis is handling it
    




// HOME
// HOME
// HOME
// HOME
// HOME





animateTextLines('.heading h4');



gsap.from(".sec-video", {
    scale: 0.4,
    duration: 5,    
    scrollTrigger: {
        trigger: ".video",
        start: "top 50%",
        end: "top 10%",
        scrub: 2,
        // markers: true,
    }

})







// TEXT ANIMATION FUNCTION
// TEXT ANIMATION FUNCTION
// TEXT ANIMATION FUNCTION
// TEXT ANIMATION FUNCTION
// TEXT ANIMATION FUNCTION



        
// Function to handle the line-by-line text reveal animation
function animateTextLines(targetSelector) {
    const headingElement = document.querySelector(targetSelector);

    // Check if the element exists to prevent errors
    if (!headingElement) {
        console.warn(`Element with selector '${targetSelector}' not found. Skipping animation.`);
        return;
    }

    // Initialize SplitType on the heading to break it into lines AND words
    const splitText = new SplitType(headingElement, { types: 'lines, words' });

    // Set overflow: hidden on each line to clip the animating words
    gsap.set(splitText.lines, { overflow: 'hidden' });

    // Loop through each line and create a separate animation with its own ScrollTrigger
    splitText.lines.forEach((line, index) => {
        // Set the initial state of the words within this specific line:
        // y: '100%' means move them down by 100% of their own height
        // opacity: 0 means make them completely transparent
        gsap.set(line.querySelectorAll('.word'), { y: '100%', opacity: 0 });

        // Create the animation for the words within this specific line
        gsap.to(line.querySelectorAll('.word'), {
            y: '0%',         // Animate back to their original Y position
            opacity: 1,      // Animate to full opacity
            // stagger: 0.05,   // Each word animates 0.05 seconds after the previous one
            stagger: { each: 0.3, from: 'random' },

            duration: 0.6,   // Duration for each individual word's animation
            ease: 'power3.out', // A smooth easing function

            // Attach ScrollTrigger directly to this line's animation
            scrollTrigger: {
                trigger: line,           // The individual line itself is the trigger
                start: 'top 70%',        // Animation starts when the top of the line hits 90% from the top of the viewport
                end: 'bottom 10%',       // Animation completes when the bottom of the line hits 10% from the top of the viewport
                toggleActions: 'play none none none', // Play the animation once when triggered
                // markers: true, // Uncomment for debugging to see each line's ScrollTrigger
            }
        });
    });
}

// Call the animation function for your heading
// Make sure the selector matches your HTML structure
animateTextLines('.sec-text h1');
// animateTextLines('.sec-text p');







// CARDS
// CARDS
// CARDS
// CARDS
// CARDS
// CARDS
// CARDS





// Select all card elements
const cards = gsap.utils.toArray('.card');

// Loop through each card to create individual animations
cards.forEach((card, index) => {
    // Select the media (img or video) and text within the current card
    const media = card.querySelector('.card-img, .card-video');
    const text = card.querySelector('.card-text');

    // Create a timeline for each card's full animation sequence
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: card,
            // markers: true,
            start: 'top 60%', // Animation starts when the top of the card hits 80% from the viewport top
            end: 'bottom 20%', // Animation completes when the bottom of the card hits 20% from the viewport top
            toggleActions: 'play none none none', // Play once on enter
        }
    });


    // 1. Animate the media (image or video) - scale in
    tl.fromTo(media, 
        { opacity: 0, scale: 0.5 }, // Initial state for media
        { opacity: 1, scale: 1, duration: 0.5, ease: 'power3.out' },
        "<" // Start this tween at the same time as the previous one (card animation)
    );

    // 2. Animate the text (fade in and slide up)
    tl.from(text, {
        opacity: 0,
        delay: .5,
        y: 100,
        duration: 0.6,
        ease: 'back.out',
    }); // Start text animation 0.3 seconds before media animation ends (overlap)

});







// PINNED SECTION
// PINNED SECTION
// PINNED SECTION
// PINNED SECTION
// PINNED SECTION
// PINNED SECTION




gsap.to(".scroll-content", {
    xPercent: -150,
    ease: "none",
        scrollTrigger: {
        trigger: ".fourth",
        start: "top top",
        end: "top -100%",
        scrub: 1,
        pin: true,
        // markers: true
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






// LOGOS
// LOGOS
// LOGOS
// LOGOS
// LOGOS



gsap.from('.row img', {
    scale: 0,
    duration: 0.5,
    delay: .5,
    ease: 'back.out(3)',
    stagger: { each: 0.3, from: 'random' },
    scrollTrigger: {
        trigger: '.grid',
        start: 'top 80%',
        // markers: true,
    }
});




// CONTACT
// CONTACT
// CONTACT
// CONTACT
// CONTACT



animateTextLines('.contact p');
