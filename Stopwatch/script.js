// Declare variables to store the timer and stopwatch counters
let timer = null;
let hours = 0;
let minutes = 0;
let seconds = 0;

// Start the stopwatch by setting an interval of 1 second to call the "run" function
function start() {
    if (timer === null) {
        timer = setInterval(run, 1000);
    }
}

// Increment the seconds counter by 1 and update the minutes and hours counters if necessary
// Then, call the "displayTime" function to update the stopwatch display
function run() {
    seconds++;
    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }
    if (minutes === 60) {
        hours++;
        minutes = 0;
    }
    displayTime();
}

// Stop the stopwatch by clearing the interval set by the "start" function
function stop() {
    clearInterval(timer);
    timer = null;
}

// Stop the stopwatch, reset all counters to 0, and update the stopwatch display
function reset() {
    clearInterval(timer);
    timer = null;
    hours = 0;
    minutes = 0;
    seconds = 0;
    displayTime();
}

// Format the hours, minutes, and seconds counters into a string in the format "hh:mm:ss"
// Then, update the HTML element with id "display" to show the current stopwatch time
function displayTime() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("display").innerHTML = h + ":" + m + ":" + s;
}
