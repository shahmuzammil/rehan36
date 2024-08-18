let startTime = 0;
let endTime = 0;
let running = false;
let intervalId = 0;

const timeElement = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);
resetButton.addEventListener('click', resetStopwatch);

function startStopwatch() {
    if (!running) {
        running = true;
        startTime = new Date().getTime();
        intervalId = setInterval(updateTime, 10);
    }
}

function stopStopwatch() {
    if (running) {
        running = false;
        endTime = new Date().getTime();
        clearInterval(intervalId);
    }
}

function resetStopwatch() {
    running = false;
    startTime = 0;
    endTime = 0;
    timeElement.textContent = '00:00:00:00';
    clearInterval(intervalId);
}

function updateTime() {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    const hours = Math.floor(elapsedTime / 3600000);
    const minutes = Math.floor((elapsedTime % 3600000) / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = elapsedTime % 1000;
    timeElement.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds, 3)}`;
}

function pad(number, length = 2) {
    return String(number).padStart(length, '0');
}