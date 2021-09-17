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

buttonReset.onclick = function (){
    clearInterval(intervalID)
    tenMillis = 0; seconds = 0; minutes = 0;
    appendTens.textContent = "00"
    appendSeconds.textContent = "00"
    appendMinutes.textContent ="00"
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

/*
 var sec = 0;
        var min = 0;
        var hour = 0;
        var t;
     function increaseTime(){
        sec++;
        if (sec >= 60) {
        sec = 0;
        min++;
        }
        if (min >= 60) {
            min = 0;
            hour++;
        }
        console.log("asdfasdf");
        document.getElementsByClassName('time')[0].innerHTML = String(hour >= 10 ? hour : "0"+String(hour))
         + ":" + String(min >= 10 ? min : "0"+String(min))
         + ":" + String(sec >= 10 ? sec : "0"+String(sec))

        startWatch();
      }

      function startWatch(){
          t = setTimeout(increaseTime,1000);
      }
      function stop(){
          clearTimeout(t);
      }
      function clearTime(){
          document.getElementsByClassName('time')[0].innerHTML = "00:00:00";
          sec = 0;
          min = 0;
          hour = 0;
      }
*/