// Gsap.to()
// Gsap.from()

let tl = gsap.timeline()

tl.from("h2", {
    y: -30,
    duration: 0.5,
    delay: 0.3,
    opacity: 0
})

tl.from("h4", {
    y: -30,
    duration: 0.5,
    delay: 0.3,
    opacity: 0,
    stagger: 0.3
})