// ======================================
// Portfolio v2 - Part 1
// ======================================

// Loading Screen
window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

},1200);

});

// Typing Effect

const typing = document.getElementById("typing");

const words=[

"Cybersecurity Student",

"Offensive Security Enthusiast",

"Web Application Security",

"Threat Detection",

"Python Developer",

"Security Researcher"

];

let wordIndex=0;

let charIndex=0;

let deleting=false;

function type(){

const current=words[wordIndex];

if(!deleting){

typing.textContent=current.substring(0,charIndex++);

if(charIndex>current.length){

deleting=true;

setTimeout(type,1500);

return;

}

}else{

typing.textContent=current.substring(0,charIndex--);

if(charIndex<0){

deleting=false;

wordIndex=(wordIndex+1)%words.length;

}

}

setTimeout(type,deleting?40:90);

}

type();

// Scroll Progress

const progress=document.getElementById("progressBar");

window.addEventListener("scroll",()=>{

const winScroll=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

progress.style.width=(winScroll/height)*100+"%";

});

// Reveal Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,

transform:"translateY(60px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:900,

fill:"forwards",

easing:"ease"

});

}

});

},{threshold:.15});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});

// Navbar Blur

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.style.background="rgba(5,8,22,.90)";

}else{

navbar.style.background="rgba(15,20,35,.55)";

}

});

// Hero Card Mouse Effect

const card=document.querySelector(".hero-card");

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*18;

const rotateX=((y/rect.height)-0.5)*-18;

card.style.transform=`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateX(0deg) rotateY(0deg)";

});

// Counter Animation

const counters=document.querySelectorAll(".stats h3");

let counted=false;

window.addEventListener("scroll",()=>{

const about=document.querySelector(".about");

if(!about)return;

const top=about.offsetTop;

if(window.scrollY>top-350 && !counted){

counted=true;

counters.forEach(counter=>{

const target=counter.innerText.replace(/\D/g,'');

let count=0;

const update=()=>{

if(count<target){

count++;

counter.innerText=count+

(counter.innerText.includes("+")?"+":"");

requestAnimationFrame(update);

}else{

counter.innerText=

counter.dataset.original||

counter.innerText;

}

};

counter.dataset.original=counter.innerText;

update();

});

}

});

// Smooth Button Hover

document.querySelectorAll(".primary-btn,.secondary-btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-6px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0) scale(1)";

});

});

