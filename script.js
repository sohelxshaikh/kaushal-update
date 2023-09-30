const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-links')
const loader = document.querySelector('.loader');
const main = document.querySelector('.kaushal-website');
const body = document.querySelector('body')


// loader
function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';

    main.style.display = 'block';
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 1000);
}

init();



// gsap animation
var tl=gsap.timeline();

tl.from(".title-container", {
      opacity: 0,
      delay:1.5,
      translateY: 0,
      duration: 1,
      ease: "power4.out",
    })
  .from([".title-heading", ".title-subheading",".register-btn", ".days-remaining"], {
      opacity: 0,
      x:0,
      translateY: 0,
      duration: 1,
      stagger: 0.2, // Adds a slight stagger effect to elements
      ease: "power4.out",
    }, "-=0.5");
     // Starts the elements animation 0.5 seconds after the container
  tl.from(".social",{
      opacity:0,
      y:40,
      duration:1

  });
  tl.to(".social",{
      opacity:1,
      y:20,
      duration:1

  });
  
  
 
  const additionalX = { val: 0 };
let containerWidth = window.innerWidth;
let offset = 0;
const items = document.getElementsByClassName("moving-gallery__slide");

let additionalXAnim; // Declare additionalXAnim variable

const animation = () => {
  additionalXAnim = gsap.to(".moving-gallery__slide", {
    duration: 30,
    x: -containerWidth,
    ease: Linear.easeNone,
    paused: false,
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize((x) => {
        offset += additionalX.val;
        x = (parseFloat(x) + offset) % (0.5 * containerWidth);
        return x;
      }),
    },
    onUpdate: () => {
      // Add code here to run when the animation updates
    },
  });
};
  
  // You can call the animation function here if needed
  animation();
  //Now, you can save this code in a .js file, and it will work as a JavaScript script. Make sure you have the necessary libraries (like GSAP) included in your HTML file where you reference this script. You can call the animation() function when you want to start the animation.
  
  
  
  
  
  
  
  const imagesScrollerTrigger = ScrollTrigger.create({
    start: "top 0",
    end: "bottom 0%",
    onUpdate: function (self) {
      const velocity = self.getVelocity();
  
      if (velocity > 0) {
        if (additionalXAnim) additionalXAnim.kill();
        additionalX.val = -velocity / 2000;
        additionalXAnim = gsap.to(additionalX, { val: 0 });
      }
    }
  });
  
  animation();
  
// Navbar
menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  console.log("Button is active");
  menuLinks.classList.toggle('active');
  body.classList.toggle('is-nav');
  
// Nav button scroll
  for (var i = 0; i < navLinks.length; i++) {
    var self = navLinks[i];

    self.addEventListener(
      "click",
      function () {
        menu.classList.remove('is-active');
        menuLinks.classList.remove("active");
        body.classList.remove("is-nav");

      })
  }

})
// Get a Date

const countdown = () => {
  var one_day = 1000 * 60 * 60 * 24
  
  var present_date = new Date();
    
  var event_day = new Date(present_date.getFullYear(), 9, 16)
    
  if (present_date.getMonth() == 10 && present_date.getDate() > 15)
      event_day.setFullYear(event_day.getFullYear() + 1)
    
  var Result = Math.round(event_day.getTime() - present_date.getTime()) / (one_day);
    
  var Final_Result = Result.toFixed(0);

    document.querySelector(".mySpan").innerHTML = Final_Result;
   console.log("Yes This Function is Executing");
}

countdown()


// Modal

// Get the modal
let modal1 = document.getElementById("myModal1");
let modal2 = document.getElementById("myModal2");
let modal3 = document.getElementById("myModal3");
let modal4 = document.getElementById("myModal4");
let modal5 = document.getElementById("myModal5");
let modal6 = document.getElementById("myModal6");

let modal=[modal1,modal2,modal3,modal4,modal5,modal6]

// Get the button that opens the modal
let btn1 = document.querySelector("#knowmore1");
let btn2 = document.querySelector("#knowmore2");
let btn3 = document.querySelector("#knowmore3");
let btn4 = document.querySelector("#knowmore4");
let btn5 = document.querySelector("#knowmore5");
let btn6 = document.querySelector("#knowmore6");

let btn=[btn1,btn2,btn3,btn4,btn5,btn6]

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click',(e)=>{
    modal[i].style.display="block";
  })
  
}
// When the user clicks on <span> (x), close the modal
for (let i = 0; i < modal.length; i++) {
    span[i].addEventListener('click',(e)=>{
         modal[i].style.display="none"
    })
  
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {

  
}



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}



// --------------------------------------------------



const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

