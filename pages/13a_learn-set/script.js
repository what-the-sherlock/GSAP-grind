import gsap from "gsap";

gsap.set('.gsap-box', {
    opacity: 0,
    scale: 0.5, 
    y: -100,
    x: -100,

});

gsap.to('.gsap-box', {
    rotate: 360,
    delay: 0.5,
    duration: 3,
    ease: 'expo.out',
    opacity: 1,
    scale: 1,
    y: 0
})