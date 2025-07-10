gsap.to(".box", {
  opacity: 1,
  borderRadius: "100%",
  rotateX: 360,
  scale: 1.5,
  duration: 3,
  ease: "bounce.out",
  onComplete: () => {
    gsap.to(".card", {
      duration: 1,
    });
  },
});
