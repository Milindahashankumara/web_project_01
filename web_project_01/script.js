#about {
let MslideIndex = 1;
showMSlides(MslideIndex);

function plusSlides(n) {
 showMSlides(MslideIndex += n);
}

function currentSlide(n) {
  showMSlides(MslideIndex = n);
}

function showMSlides(n) {
  let i;
  let Mslides = document.getElementsByClassName("MSlides");
  let dots = document.getElementsByClassName("dot");
  if (n > Mslides.length) {MslideIndex = 1}    
  if (n < 1) {MslideIndex = Mslides.length}
  for (i = 0; i < Mslides.length; i++) {
    Mslides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  Mslides[slideIndex-1].style.display = "block";  
  dots[MslideIndex-1].className += " active";
}
}