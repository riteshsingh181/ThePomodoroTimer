let time = document.querySelector("#time-heading");
let timeEdit = document.querySelector(".time-edit");
let timeEditInputs = document.querySelectorAll("input");
let minutes = document.querySelector("h1#minutes");
let seconds = document.querySelector("h1#seconds");
let minutesInp = document.querySelector("input#minutesInp");
let secondsInp = document.querySelector("input#secondsInp");
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

for(input of timeEditInputs){
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
});