


const Menu = document.querySelector(".Menu")
const navmenu = document.querySelector(".navbar")

Menu.addEventListener('click',()=>{navmenu.classList.toggle('mobile-menu')})





let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
mybutton.style.opacity = 1;
mybutton.style.right = "2em";
mybutton.style.display = "block";
mybutton.style.scale = "1";
  } else {
mybutton.style.scale = "0.1";
mybutton.style.opacity = 0;
mybutton.style.right = 0;
  }
}

function topFunction() {
document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




const numSteps = 20.0;

let forma;
let compet;
let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
let prevRatio = 0.0;
let increasingOpa = "ratio";
let decreasingOpa = "ratio";


// Set things up
window.addEventListener("load", (event) => {
forma = document.querySelector("#forma");
compet = document.querySelector("#compet");


createObserver();
}, false);
///////////////////////////////////////////////////////////////////////////
function createObserver() {
let observer;

let options = {
root: null,
rootMargin: "0px",
threshold: buildThresholdList()
};

observer = new IntersectionObserver(handleIntersect, options);
observer.observe(forma);
observer.observe(compet);
}
///////////////////////////////////////////////////////////////////////////
function buildThresholdList() {
let thresholds = [];
let numSteps = 20;

for (let i=1.0; i<=numSteps; i++) {
let ratio = i/numSteps;
thresholds.push(ratio);
}

thresholds.push(0);
return thresholds;
}
///////////////////////////////////////////////////////////////////////////
function handleIntersect(entries, observer) {
entries.forEach((entry) => {
if (entry.intersectionRatio > prevRatio) {
  entry.target.style.opacity = increasingOpa.replace("ratio", entry.intersectionRatio);
} else {
  if (currentScroll < 0){
    entry.target.style.opacity = decreasingOpa.replace("ratio", 1);}
}

prevRatio = entry.intersectionRatio;
});
}
