let body = document.querySelector("body");
let main = document.querySelector(".main");
let container = document.querySelector(".container");

let time = document.querySelector("#time-heading");
let timeEdit = document.querySelector(".time-edit");
let timeEditInputs = document.querySelectorAll("input");
let minutes = document.querySelector("h1#minutes");
let seconds = document.querySelector("h1#seconds");
let minutesInp = document.querySelector("input#minutesInp");
let secondsInp = document.querySelector("input#secondsInp");

let mode = "dark";
let lightSun = document.querySelector("button#light i");
let darkMoon = document.querySelector("button#dark i");
let circle = document.querySelector(".circle");
let toggleBtn = document.querySelector(".btn-group");
let modeText = document.querySelector(".modeText h3");

let startBtn = document.querySelector("button#start");
let started = false;
let id;

let pomodoro = document.querySelector("button#pomodoro");
let shortBreak = document.querySelector("button#shortbreak");
let longBreak = document.querySelector("button#longbreak");
let timerMode = "pomodoro";

let reset = document.querySelector("button#reset");

let startingPage = document.createElement("div");
startingPage.classList.add("startingpage")
body.insertAdjacentElement("afterbegin", startingPage);
let startingPageHello = document.createElement("h3");
let startingPageName = document.createElement("p");
startingPageHello.innerText = "The Pomodoro Timer!⌛";
startingPageName.innerText = "An elegant timer with beautiful UI."
startingPage.appendChild(startingPageHello);
startingPage.appendChild(startingPageName);
setTimeout(()=>{
    startingPage.style.opacity = 0;
    setTimeout(() => {
        startingPage.classList.add("displayNone");
    }, 1000);
}, 1500);

document.addEventListener("keypress", (event)=>{
    if(event.key == "Enter"){
        timeEdit.style.display = "none";
    }
})

timeEdit.addEventListener("keypress", (event)=>{
    if(event.key == "Enter"){
        timeEdit.style.display = "none";
        initializeMin();
        initializeSec();
    }
})

function initializeMin(){
    let minValue = minutesInp.value;
    if(minValue == ""){
        minValue = "25";
    }
    minValue = parseInt(minValue);
    minutesInp.value = minValue;
    minutes.innerText = minValue;
}

function initializeSec(){
    let secValue = secondsInp.value;
    if(secValue == ""){
        secValue = "00";
    }
    secValue = parseInt(secValue);
    if (secValue < 10){
        secValue = `0${secValue}`;
    }
    if (secValue == 60){
        let minValue = minutesInp.value;
        minValue++;
        minutesInp.value = minValue;
        minutes.innerText = minValue;
        secValue = "00";
    }
    if (secValue > 60){
        let minValue = minutesInp.value;
        minValue = parseInt(minValue);
        let min = Math.floor(secValue / 60);
        let sec = secValue % 60;
        secValue = sec;
        minValue += min;
        minutesInp.value = minValue;
        minutes.innerText = minValue;
    }
    secondsInp.value = secValue;
    seconds.innerText = secValue;
}

time.addEventListener("click", ()=>{
    timeEdit.style.display = "block";
})


minutesInp.addEventListener("change", (event)=>{
    pause();
    initializeMin();
})

secondsInp.addEventListener("change", (event)=>{
    pause();
    initializeSec();
})

 for(input of timeEditInputs){
    input.addEventListener("keypress", (event)=>{
        if(event.key == "Enter"){
            timeEdit.style.display = "none";
        }
    });
}

startBtn.addEventListener("click", (event)=>{
    if(started == false){
        start();
        started = true;
    } else if (started == true){
        pause();
        started = false;
    }
})

function start(){
    startBtn.innerText = "pause";
    startTimer();
}

function startTimer(){
    let sec = parseInt(seconds.innerText);
    let min = parseInt(minutes.innerText);
    let totalSec = (min*60) + sec;
    id = setInterval(() => {
        if(totalSec != 0){
            totalSec--;
        } else{
            pause();
        }
        let secScreen = totalSec % 60;
        if(secScreen < 10){
            secScreen = `0${secScreen}`;
        }
        seconds.innerText = secScreen;
        let minScreen = Math.floor(totalSec / 60);
        minutes.innerText = minScreen;
    }, 1000);
}

function pause(){
    startBtn.innerText = "start";
    clearInterval(id);
    started = false;
}

toggleBtn.addEventListener("click", ()=>{
    if(mode == "dark"){
        container.style.opacity = "0.5";
        setTimeout(() => {
            container.style= "";
            light();
        }, 250);
    } if(mode == "light"){
        container.style.opacity = "0.5";
        setTimeout(() => {
            container.style = "";
            dark();
        }, 250);
    }
    console.log("now mode is: ", mode);
    
})


function toggleBtnFuncRight(btn, sun, moon){
    btn.style.left = "58px";
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
    toggleBtnFuncRight(circle, lightSun, darkMoon);
    lightSun.style.color = "white";
    circle.style.backgroundColor = "white";
    toggleBtn.style.backgroundColor = "black";
    backgroundChange();
    modeText.innerText = "Light Mode";
    mode = "light";
}

function dark(){
    toggleBtnFuncLeft(circle, lightSun, darkMoon);
    circle.style.backgroundColor = "black";
    toggleBtn.style.backgroundColor = "gold";
    backgroundChange();
    modeText.innerText = "Dark Mode";
    mode = "dark";
}

let timerBtns = document.querySelectorAll(".timer-btns button");

shortBreak.addEventListener("click", (event)=>{
    for(let i = 0; i <= 2; i++){
        timerBtns[i].classList.remove("active");
    }
    event.target.classList.add("active");
    shortBreakFunc();
});

longBreak.addEventListener("click", (event)=>{
    for(let i = 0; i <= 2; i++){
        timerBtns[i].classList.remove("active");
    }
    event.target.classList.add("active");
    longBreakFunc();
})

pomodoro.addEventListener("click", (event)=>{
    for(let i = 0; i <= 2; i++){
        timerBtns[i].classList.remove("active");
    }
    event.target.classList.add("active");
    pomodoroFunc();
});

reset.addEventListener("click", (event)=>{
    event.target.classList.add("rotate");
    setTimeout(() => {
        event.target.classList.remove("rotate");
    }, 1550);
    for(btnmode of timerBtns){
        if(btnmode.classList.contains("active")){
            timerMode = btnmode.getAttribute("id");
            console.log("timerMode: " + timerMode);
        }
    }
    timerCall(timerMode);
    pause();
})

function timerCall(timerMode){
    if(timerMode == "pomodoro"){
        pomodoroFunc();
    } else if(timerMode == "shortbreak"){
        shortBreakFunc();
    } else if(timerMode == "longbreak"){
        longBreakFunc();
    }
}

function pomodoroFunc(){
    minutes.innerText = "25";
    seconds.innerText = "00";
    pause();
}

function shortBreakFunc(){
    minutes.innerText = "5";
    seconds.innerText = "00";
    pause();
}

function longBreakFunc(){
    minutes.innerText = "10";
    seconds.innerText = "00";
    pause();
}