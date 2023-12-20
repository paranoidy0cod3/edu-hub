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

const header =document.querySelector('.nav-main');
const scrollWatcher = document.createElement('div');
scrollWatcher.setAttribute('data-scroll-watcher', '');
header.before(scrollWatcher)

const scrollObserver = new IntersectionObserver((entries)=> {
    
    header.classList.toggle('sticking', !entries[0].isIntersecting)
});

scrollObserver.observe(scrollWatcher);


// slide show
// const carousalButton = document.querySelectorAll('.btn-carousal');

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("carousal-slide");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

// date and time onpage 
function updateTime(){
const dayEl = document.querySelector('.days>p')
const hourEl = document.querySelector('.hours>p')
const minuteEl = document.querySelector('.minutes>p')
const secondEl = document.querySelector('.seconds>p')
const myDate = new Date()
let day = myDate.getDay().toString()
let hours = myDate.getHours().toString()
let minutes = myDate.getMinutes().toString()
let seconds = myDate.getSeconds().toString()
  dayEl.innerHTML=day
  hourEl.innerHTML=hours
  minuteEl.innerHTML=minutes
  secondEl.innerHTML=seconds
}
setInterval(updateTime,1000)

// Number updating efffect

let speed = 10;

function incEltNbr(id) {
  elt = document.getElementById(id);
  endNbr = Number(document.getElementById(id).innerHTML);
  incNbrRec(0, endNbr, elt);
}

/*A recursive function to increase the number.*/
function incNbrRec(i, endNbr, elt) {
  if (i <= endNbr) {
    elt.innerHTML = i;
    setTimeout(function() {//Delay a bit before calling the function again.
      incNbrRec(i + 1, endNbr, elt);
    }, speed);
  }
}

/*Function called on button click*/

function incNbr(){
  incEltNbr("teacher");
  incEltNbr("course");
  incEltNbr("lesson");
  incEltNbr("activity");
}

incEltNbr("teacher"); /*Call this funtion with the ID-name for that element to increase the number within*/
incEltNbr("course"); /*Call this funtion with the ID-name for that element to increase the number within*/
incEltNbr("lesson"); /*Call this funtion with the ID-name for that element to increase the number within*/
incEltNbr("activity"); /*Call this funtion with the ID-name for that element to increase the number within*/


// document.querySelector('.school-info-display').addEventListener('open', (e)=>{
//   console.log(e.target);
// })