gsap.to(".card", {
  opacity: 1,
  borderRadius: "100%",
  rotateX: 360,
  scale: 1.5,
  duration: 3,
  ease: "bounce.out",
  onComplete: () => {
    gsap.to(".card", {
      backgroundColor: "#FF487D", // Use this for background
      duration: 1,
    });
  },
});
