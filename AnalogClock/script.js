const HOURHAND = document.querySelector("#hour")
const MINHAND = document.querySelector("#minute")
const SECHAND = document.querySelector("#second")

var date = new Date();

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let secPositition = sec*360/60;
let minPosition = (min*360/60) + (sec/60);
let hrPosition = (hr*360/12) + (min/12);

function runClock() {

  secPositition += 6;
  minPosition += 1/10;
  hrPosition += 1/120;
  HOURHAND.style.transform = "rotate(" +  hrPosition + "deg)"
  MINHAND.style.transform = "rotate(" + minPosition + "deg)"
  SECHAND.style.transform = "rotate(" + secPositition + "deg)"
}

var interval = setInterval(runClock, 1000);
