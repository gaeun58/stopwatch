let minutes = 0;
let seconds = 0;
let tenMillis = 0;

const appendTens = document.getElementById("tenMillis");
const appendSeconds = document.getElementById("seconds");
const appendMinutes = document.getElementById("minutes");
const buttonStart = document.getElementById("bt_start");
const buttonStop = document.getElementById("bt_stop");
const buttonReset = document.getElementById("bt_reset");
let intervalID;

buttonStart.onclick = function (){
    clearInterval(intervalID)
    intervalID = setInterval(operateTimer, 10)
}

buttonStop.onclick = function (){
    clearInterval(intervalID)
}

// 10ms 마다 시간에 대한 숫자가 증가한다.
function operateTimer() {
    tenMillis++;
    appendTens.textContent = tenMillis > 9 ? tenMillis : '0' + tenMillis
    if(tenMillis > 99) {
        seconds++;
        appendSeconds.textContent = seconds > 9 ? seconds : '0' + seconds
        tenMillis = 0
        appendTens.textContent = "00"
    }
    if(seconds > 59) {
        minutes++;
        appendMinutes.textContent = minutes > 9 ? minutes : '0' + minutes
        seconds = 0
        appendSeconds.textContent = "00"
    }
}