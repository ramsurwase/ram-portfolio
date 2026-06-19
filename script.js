console.log("Ram Surwase Portfolio Loaded");

const button = document.querySelector("button");

button.addEventListener("click", () => {
    alert("scroll down!");
});
const text = "Web Developer • Creator • Video Editor";
const typing = document.getElementById("typing",);

let i = 0;

function typeText() {
    if (i < text.length) {
        typing.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeText, 80);
    }
}

typeText();
const text = "Web Developer • Creator • Video Editor";
const typing = document.getElementById("typing");

let i = 0;

function typeText(){
    if(i < text.length){
        typing.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeText, 80);
    }
}

typeText();