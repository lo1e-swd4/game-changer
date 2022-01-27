let currentSlide = 0;

function slideShowTimed(){
    let slides = document.getElementsByClassName('slideshow');

    slides[currentSlide].classList.remove('visible');
    currentSlide++;
    if(currentSlide >= slides.length){
    currentSlide =0;
    }

    slides[currentSlide].classList.add('visible');
}
setInterval(slideShowTimed, 5000);