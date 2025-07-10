gsap.to(".card", {
    duration: 3,
    scale: 1,
    delay: 1,
    opacity: 1,
    onComplete :()=>{
        gsap.to(".card", {
            y: -20,
            yoyo: true,
            scale: 1.5,
            repeat: -1,
            rotate: 60,
        })
    }
})