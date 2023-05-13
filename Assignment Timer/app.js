const timeInput = document.getElementById('input-time');
const countdownDisplay = document.querySelector('.text');
const startButton = document.getElementById("btn-start")
const resetButton = document.getElementById("btn-reset")

let countDown;

function startCountdown() {
    startButton.disabled = true; //Button ruk jaa
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
            startButton.disabled = false; //Button chal jaa
            resetButton.disabled = false; //Button chal jaa

        }
    }, 1000);
}
function resetCountdown() {
    clearInterval(countDown)
    countdownDisplay.textContent = "00:00";
    startButton.disabled = false;  //Button chal ja
    resetButton.disabled = false;  //Button chal ja
}