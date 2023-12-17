const navMenu = document.querySelector('nav>ul');
const navToggle = document.querySelector('.nav-hidden-menu');


navToggle.addEventListener('click', () => {
    if (navToggle.children[0].className == 'fa-solid fa-xmark') {
        navToggle.children[0].className = 'fa-solid fa-bars'
        navMenu.classList.toggle('active');
    }
    else if (navToggle.children[0].className == 'fa-solid fa-bars') {
        navToggle.children[0].className = 'fa-solid fa-xmark'
        navMenu.classList.toggle('active');
    }
    
});

const header =document.querySelector('nav')
const scrollWatcher = document.createElement('div')
scrollWatcher.setAttribute('data-scroll-watcher', '')
header.after(scrollWatcher)

const scrollObserver = new IntersectionObserver((entries)=> {
    
    header.classList.toggle('sticking', !entries[0].isIntersecting)
})

scrollObserver.observe(scrollWatcher);


// slide show
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("carousal-slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}