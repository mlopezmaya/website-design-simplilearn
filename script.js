// Mouse Circle
const mouseCircle = document.querySelector(".mouse-circle");
const mouseDot = document.querySelector(".mouse-dot");

const mouseCircleFn = (x, y) => {
    mouseCircle.style.cssText = `top: ${y}px; left: ${x}px`;
    mouseDot.style.cssText = `top: ${y}px; left: ${x}px`;
};
// End of Mouse Circle



// Animated Circles
const circles = document.querySelectorAll(".circle");
const mainImg = document.querySelector(".main-circle img");

let mX = 0;
let mY = 0;

const animateCircles = (e,x,y) => {
    if(x < mX) {
        circles.forEach((circle) => {
            circle.style.left = `100px`;
        });
        mainImg.style.left = `100px`;
    } else if(x > mX) {
        circles.forEach((circle) => {
            circle.style.left = `-100px`;
        });
        mainImg.style.left = `-100px`;  
    }


    if (y < mY) {
        circles.forEach((circle) => {
            circle.style.top = `100px`;
        });
        mainImg.style.top = `100px`;
    } else if(y > mY) {
        circles.forEach((circle) => {
            circle.style.top = `-100px`;
        });
        mainImg.style.top = `-100px`;  
    }

    mX = e.clientX;
    mY = e.clientY;
};


document.body.addEventListener("mousemove", (e) => {
let x = e.clientX;
let y = e.clientY;

    mouseCircleFn(x,y);
    animateCircles(e,x,y);
});



const animatecircles = (e,x,y) => {
    if(x < mX) {
        circles.forEach((circle) => {
            circle.style.left = `100px`;
        });
        mainImg.style.left = `100px`;
    } else if(x > mX) {
        circles.forEach((circle) => {
            circle.style.left = `-100px`;
        });
        mainImg.style.left = `-100px`;  
    }


    if (y < mY) {
        circles.forEach((circle) => {
            circle.style.top = `100px`;
        });
        mainImg.style.top = `100px`;
    } else if(y > mY) {
        circles.forEach((circle) => {
            circle.style.top = `-100px`;
        });
        mainImg.style.top = `-100px`;  
    }

    mX = e.clientX;
    My = e.clientY;
};
// End of Animated Circles


// Main Buttom
const mainBtns = document.querySelectorAll(".main-btn");

mainBtns.forEach(btn => {
    let ripple;

 btn.addEventListener("mouseenter",(e) => {
  const left = e.clientX - e.target.getBoundingClientRect().
  left;

  const top = e.clientY - e.target.getBoundingClientRect().
  top;

  ripple = document.createElement("div");
  ripple.classList.add("ripple");
  ripple.style.left = `${left}px`;
  ripple.style.top = `${top}px`;
  btn.prepend(ripple);
  });

  btn.addEventListener("mouseleave", () => {
  btn.removeChild(ripple);
  });

  })

// End of Main Butoon 


// About Me Text 
const aboutMeText = document.querySelector(".about-me-text");
const aboutMeTextContent = 
"I am a designer & I create awards winning websites with the best user experience & I do not talk much, just contact me. :) #L3GND";

Array.from(aboutMeTextContent).forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    aboutMeText.appendChild(span);

    span.addEventListener("mouseenter", (e) => {
        e.target.style.animation = "aboutMeTextAnim 10s infinite";
    });
});
// End of About Me Text 

// Projects
const container = document.querySelector(".container");
const projects = document.querySelectorAll(".project");

projects.forEach(project => {
    project.addEventListener('mouseenter', () => {
        project.firstElementChild.style.top = `-${project.firstElementChild.offsetHeight - project.offsetHeight + 20 }px`;

    });

    project.addEventListener('mouseleave', () => {
        project.firstElementChild.style.top = "2rem";
    });

    // Big Project Image
    project.addEventListener("click",() => {
        const bigImgWrapper = document.createElement("div");
        bigImgWrapper.className = "project-img-wrapper";
        container.appendChild(bigImgWrapper);

        const bigImg = document.createElement("img");
        bigImg.className = "projetc-img";
        const imgPath = project.firstElementChild.getAttribute("src").split(".")[0];
        bigImg.setAttribute("src", `${imgPath}-JPEG`);
        bigImgWrapper.appendChild(bigImg);
    });
    // End of Big Project Image

});
// End of Prtojects 

