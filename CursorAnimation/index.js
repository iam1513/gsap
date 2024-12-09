let main = document.querySelector("#main")
let cursor = document.querySelector("#cursor")
let image = document.querySelector("#img")

main.addEventListener("mousemove", function (vals) {
    gsap.to(cursor, {
        x: vals.x,
        y: vals.y,
        duration: 0.6,
        ease: "back.out"
    })
})

image.addEventListener("mouseenter", function (vals) {
    cursor.innerHTML = "View More"
    gsap.to(cursor, {
        scale: 4,
        backgroundColor: "orange",
    })
})

image.addEventListener("mouseleave", function (vals) {
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale: 1,

    })
})