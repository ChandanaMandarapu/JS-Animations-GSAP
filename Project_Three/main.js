var tl = gsap.timeline()
tl.from(".nav",{
    opacity:0,
    delay: 0.3,
})
tl.from(".nav h1, .nav h3,.nav button",{
    y: -80,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.3
})
tl.from(".left img",{
    opacity:0,
    duration: 0.5,
    scale:0.5
})
tl.from(".right h1",{
    x: 100,
    opacity:0,
    duration: 1,
    stagger: 0.4
})
tl.from(".right span img",{
    rotate: 360,
    x: -100,
})


gsap.registerPlugin(ScrollTrigger);

gsap.from(".pg2 .card", {
  opacity: 0,
  y: 50,
  duration: 0.5,
  stagger: 0.3, 
  scrollTrigger: {
    trigger: ".pg2 .card",
    scroller: "body",
    start: "top 70%",
  },
});
