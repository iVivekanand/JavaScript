const TESTWRAPPER = document.querySelector(".test-wrapper");
const TESTAREA = document.querySelector("#test-area");
const ORIGINTEXT = document.querySelector("#origin-text p").innerHTML;
const THETIMER = document.querySelector(".timer");
const RESETBUTTON = document.querySelector("#reset");

var timer = [0, 0, 0, 0];
var interval = 0;
var timerRunning = false;

function leadingZeros(time) {
  if (time <= 9) {
    time = "0" + time;
  }
  return time;
}

function runTimer() {
  let currentTime = leadingZeros(timer[0]) + ":" + leadingZeros(timer[1]) + ":"
          + leadingZeros(timer[2]);
  THETIMER.innerHTML = currentTime;
  timer[3]++;

  timer[0] = Math.floor((timer[3]/100)/60);
  timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
  timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

function start() {
  let textEnteredLength = TESTAREA.value.length;
  if (textEnteredLength === 0 && !timerRunning) {
    timerRunning = true;
    interval = setInterval(runTimer, 10);
  }
  // console.log(textEnteredLength);
}

function spellCheck() {
  let textEntered = TESTAREA.value;
  // console.log(textEntered);
  let originTextMatch = ORIGINTEXT.substring(0, textEntered.length);

  if (textEntered.length === 0) {
    TESTWRAPPER.style.borderColor = "grey";
  } else {
    if (textEntered == ORIGINTEXT) {
        TESTWRAPPER.style.borderColor = "#00FF00";
        clearInterval(interval);
        timerRunning = false;
      } else {
        if (textEntered == originTextMatch) {
          TESTWRAPPER.style.borderColor = "#65CCF3";
        } else {
          TESTWRAPPER.style.borderColor = "#E95D0F";
        }
      }
    }
}

function reset() {
  clearInterval(interval);
  interval = null;
  timer = [0,0,0,0];
  timerRunning = false;

  TESTAREA.value = "";
  THETIMER.innerHTML = "00:00:00";
  TESTWRAPPER.style.borderColor = "grey";
  // console.log("Reset button pressed");
}

TESTAREA.addEventListener("keypress", start, false);
TESTAREA.addEventListener("keyup", spellCheck, false);
RESETBUTTON.addEventListener("click", reset, false);
