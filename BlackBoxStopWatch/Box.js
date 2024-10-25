// script.js
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hour = 0;
let minute = 0;
let second = 0;
let timer = null;

startBtn.addEventListener('click', function () {
    if (timer === null) {
        timer = setInterval(stopWatch, 1000);
    }
});

stopBtn.addEventListener('click', function () {
    clearInterval(timer);
    timer = null;
});

resetBtn.addEventListener('click', function () {
    clearInterval(timer);
    timer = null;
    hour = 0;
    minute = 0;
    second = 0;
    updateDisplay();
});

function stopWatch() {
    second++;
    if (second === 60) {
        minute++;
        second = 0;
    }
    if (minute === 60) {
        hour++;
        minute = 0;
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('hr').innerHTML = String(hour).padStart(2, '0');
    document.getElementById('min').innerHTML = String(minute).padStart(2, '0');
    document.getElementById('sec').innerHTML = String(second).padStart(2, '0');
}