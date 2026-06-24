// Future animations can be added here

console.log("Sai Nadh Portfolio Loaded Successfully");
const words = [
"Embedded Systems Engineer",
"Automotive Electronics Enthusiast",
"AI & Automation Learner",
"Python Developer"
];

let wordIndex = 0;
let charIndex = 0;

const textElement =
document.getElementById("typing-text");

function typeEffect(){

if(charIndex < words[wordIndex].length){

textElement.textContent +=
words[wordIndex].charAt(charIndex);

charIndex++;

setTimeout(typeEffect,100);

}
else{

setTimeout(eraseEffect,2000);

}

}

function eraseEffect(){

if(charIndex > 0){

textElement.textContent =
words[wordIndex].substring(0,charIndex-1);

charIndex--;

setTimeout(eraseEffect,50);

}
else{

wordIndex++;

if(wordIndex >= words.length){
wordIndex = 0;
}

setTimeout(typeEffect,500);

}

}

document.addEventListener("DOMContentLoaded",()=>{
typeEffect();
});
