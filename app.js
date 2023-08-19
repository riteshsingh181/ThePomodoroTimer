let body = document.querySelector("body");
let container = document.querySelector(".container");

let time = document.querySelector("#time-heading");
let timeEdit = document.querySelector(".time-edit");
let timeEditInputs = document.querySelectorAll("input");
let minutes = document.querySelector("h1#minutes");
let seconds = document.querySelector("h1#seconds");
let minutesInp = document.querySelector("input#minutesInp");
let secondsInp = document.querySelector("input#secondsInp");

let mode = "dark";
let btnGroup = document.querySelector(".btn-group");
let lightSun = document.querySelector("button#light i");
let darkMoon = document.querySelector("button#dark i");
let toggleBtn = document.querySelector("button.circle");
let modeText = document.querySelector(".modeText h3");

let startBtn = document.querySelector("button#start");
let started = false;

console.log(minutes);
console.log(timeEdit);
console.log(timeEditInputs);

document.addEventListener("keypress", (event)=>{
    if(event.key == "Enter"){
        timeEdit.style.display = "none";
    }
})

timeEdit.addEventListener("keypress", (event)=>{
    if(event.key == "Enter"){
        timeEdit.style.display = "none";
    }
})

time.addEventListener("click", ()=>{
    timeEdit.style.display = "block";
})

minutesInp.addEventListener("change", (event)=>{
    let minValue = minutesInp.value;
    minutes.innerText = minValue;
})

secondsInp.addEventListener("change", (event)=>{
    let secValue = secondsInp.value;
    seconds.innerText = secValue;
})

/* for(input of timeEditInputs){
    input.addEventListener("keypress", (event)=>{
        if(event.key == "Enter"){
            timeEdit.style.display = "none";
        }
    });
}

async function timer(){
    if(started == false){
        let secondsVal = seconds.innerText;
        if(secondsVal == "00"){
            await secondsMinus(secondsVal);
        };
        await secondsMinus(secondsVal);
        //still working on it
    }
}

function secondsMinus(secondsVal){
    secondsVal--;
}


startBtn.addEventListener("click", ()=>{
    timer();
    started = true;
}); */

toggleBtn.addEventListener("click", ()=>{
    if(mode == "dark"){
        container.style.opacity = "0.5";
        container.style.transform = "scale(1.1)";
        setTimeout(() => {
            container.style= "";
            light();
        }, 250);
    } else if(mode == "light"){
        container.style.opacity = "0.5";
        container.style.transform = "scale(1.1)";
        setTimeout(() => {
            container.style = "";
            dark();
        }, 250);
    }
    console.log("clicked. now mode is: ", mode);
    
})


function toggleBtnFuncRight(btn, sun, moon){
    btn.style.left = "55px";
    sun.style.display = "inline-block";
    moon.style.display = "none";
}

function toggleBtnFuncLeft(btn, sun, moon){
    btn.style.left = "5px";
    sun.style.display = "none";
    moon.style.display = "inline-block";
}

function backgroundChange(){
    if(mode == "dark"){
        body.style.backgroundImage = "url('mountainsLight.jpg')";
    } else if (mode == "light"){
        body.style.backgroundImage = "url('mountainsDark.jpg')";
    }
}

function light(){
    toggleBtnFuncRight(toggleBtn, lightSun, darkMoon);
    lightSun.style.color = "white";
    toggleBtn.style.backgroundColor = "white";
    btnGroup.style.backgroundColor = "black";
    backgroundChange();
    modeText.innerText = "Light Mode";
    mode = "light";
}

function dark(){
    toggleBtnFuncLeft(toggleBtn, lightSun, darkMoon);
    toggleBtn.style.backgroundColor = "black";
    btnGroup.style.backgroundColor = "gold";
    backgroundChange();
    modeText.innerText = "Dark Mode";
    mode = "dark";
}