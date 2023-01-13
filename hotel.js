let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideshow-container");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}



const navbar=document.querySelector(".navbar");
const toggleBtn= document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click",()=>{
  const visibility = navbar.getAttribute("data-visible");
  if(visibility==="false"){

navbar.setAttribute("data-visible", true);
toggleBtn.setAttribute("aria-expanded", true);
  }
  else{
    navbar.setAttribute("data-visible", false);
    toggleBtn.setAttribute("aria-expanded", false);
  }
})