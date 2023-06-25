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

  const right = e.clientY - e.target.getBoundingClientRect().
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

// Navigation 
const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

document.addEventListener("scroll", () => {
    menuIcon.classList.add("show-menu-icon");
    navbar.classList.add("hide-navbar");

    if(window.scrollY === 0) {
        menuIcon.classList.remove("show-menu-icon");
        navbar.classList.remove("hide-navbar");
    }
});

menuIcon.addEventListener("click", () => {
    menuIcon.classList.remove("show-menu-icon");
    navbar.classList.remove("hide-navbar");
});
// End of Navigation 


// Projects
const container = document.querySelector(".container");
const projects = document.querySelectorAll(".project");
const projectHideBtn = document.querySelector(".project-hide-btn");

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
    bigImg.className = "project-img";
    const imgPath = project.firstElementChild.getAttribute
    ("src").split(".")[0];
    bigImg.setAttribute("src", `${imgPath}.JPEG`);
    bigImgWrapper.appendChild(bigImg);
    document.body.style.overflowY = "hidden";

    projectHideBtn.classList.add("change");

    projectHideBtn.onclick = () => {
        projectHideBtn.classList.remove("change");
        bigImgWrapper.remove()
        document.body.style.overflowY = "scroll";
    };
});
// End of Big Project Image

});
// End of Prtojects 

// Section 5
// Form 
const checkLength = (input, min) => {
    if(input.value.trim().length < min) {
        error(input, `${input.id} must be at least ${min}characters`);
    } else {
        success(input);
    }
};

const checkEmail = (input) => {
const regEx = /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;

if(regEx.test(input.value.trim())) {
    success(input)
} else {
    error(input, "Email is not valid");
}
};

form.addEventListener("submit", e => {
    e.preventDefault();


    checkLength(username, 2)
    checkLength(subject, 2)
    checkLength(message, 10)
    checkEmail(email);
    checkRequiredFields([username, email, subject, message]);
});

// End of form 
// Form Validation
const form = document.querySelector(".contact-form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const messages = document.querySelectorAll(".message");

const error = (input, message) => {
    input.nextElementSibling.classList.add("error");
    input.nextElementSibling.textContent = message;
};

const checkRequiredFields = (inputArr) => {
inputArr.forEach(input => {
    if(input.value.trim() === "") {
        error(input, `${input.id} is required`);
    }
    });
};

form.addEventListener("submit", e => {
    e.preventDefault()

    checkRequiredFields([username, email, subject, message]);

})

// End of Form Validation 

// End of Section 5


