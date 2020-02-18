// Testimonial Carousel
var slideIndex = 1;

var slideTimer;

var testimonialContainer;

window.addEventListener("load", function() {
  showSlides(slideIndex);
  resume();

  testimonialContainer = document.getElementsByClassName("testimonials")[0];

  testimonialContainer.addEventListener("mouseenter", pause);
  testimonialContainer.addEventListener("mouseleave", resume);
});

//Controls the current slide and resets interval if needed
function currentSlide(n) {
  clearInterval(slideTimer);
  slideTimer = setInterval(function() {
    plusSlides(n + 1);
  }, 4000);
  showSlides((slideIndex = n));
}

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex = n + 1));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("testimonial-slide");
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
  slides[slideIndex - 1].style.display = "grid";
  dots[slideIndex - 1].className += " active";
}

pause = () => {
  clearInterval(slideTimer);
};

resume = () => {
  clearInterval(slideTimer);
  slideTimer = setInterval(function() {
    plusSlides(slideIndex);
  }, 4000);
};

// Personas script
const persona_one = document.getElementById("persona_one");
const persona_two = document.getElementById("persona_two");

persona_one.addEventListener("mouseenter", e => {
  e.target.classList.toggle("border");
});

persona_one.addEventListener("mouseleave", e => {
  e.target.classList.toggle("border");
});

persona_two.addEventListener("mouseenter", e => {
  e.target.classList.toggle("border");
});

persona_two.addEventListener("mouseleave", e => {
  e.target.classList.toggle("border");
});
