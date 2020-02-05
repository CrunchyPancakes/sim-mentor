// Testimonial Carousel
var slideIndex = 1;

var slideTimer;

var testimonialContainer;

window.addEventListener("load", function() {
  showSlides(slideIndex);
  slideTimer = setInterval(function() {
    plusSlides(1);
  }, 4000);

  testimonialContainer = document.getElementsByClassName(
    "slideshow-container"
  )[0];

  slideshowContainer.addEventListener("mouseenter", pause);
  slideshowContainer.addEventListener("mouseleave", resume);
});

//Controls the current slide and resets interval if needed
function currentSlide(n) {
  clearInterval(myTimer);
  myTimer = setInterval(function() {
    plusSlides(n + 1);
  }, 4000);
  showSlides((slideIndex = n));
}

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
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
  clearInterval(myTimer);
};

resume = () => {
  clearInterval(myTimer);
  myTimer = setInterval(function() {
    plusSlides(slideIndex);
  }, 5000);
};
