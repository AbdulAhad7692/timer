

const timeInput = document.getElementById('input-time');
const countdownDisplay = document.querySelector('.text');

let countDown;

function startCountdown() {
    let startingMiuntes = timeInput.value || 5;
    let time = startingMiuntes * 60
    countDown = setInterval(function () {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        countdownDisplay.textContent = minutes + ":" + seconds;
        time--
        if (time < 0) {
            clearInterval(countDown);
            countdownDisplay.textContent = "Time is Up";
        }
    }, 1000);
}
function resetCountdown() {
    clearInterval(countDown)
    countdownDisplay.textContent = "00:00";
}