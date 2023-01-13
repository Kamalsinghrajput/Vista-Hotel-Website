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