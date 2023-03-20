// Mouse Circle
const mouseCircle = document.querySelector(".mouse-circle");
const mouseDot = document.querySelector(".mouse-dot");

const mouseCircleFn = (x, y) => {
    mouseCircle.style.cssText = `top: ${y}px; left: ${x}px`;
    mouseDot.style.cssText = `top: ${y}px; left: ${x}px`;

};
// End of Mouse Circle

document.body.addEventListener("mousemove", (e) => { 
    let x = e.clientX
    let y = e.clientY

    mouseCircleFn(x,y);
});

// Animated circles
const circles = document.querySelectorAll("circle")
const mainImg = document.querySelector(".main-circle img");

const animateCircles = (e, x, y) => {}
// End of Animated Circles
