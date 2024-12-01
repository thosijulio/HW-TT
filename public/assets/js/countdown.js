const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

let totalTime = 15 * 60;

function updateCountdown() {
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;

  minutesElement.textContent = String(minutes).padStart(2, "0");
  secondsElement.textContent = String(seconds).padStart(2, "0");

  totalTime--;

  if (totalTime < 0) {
    clearInterval(countdownTimer);
  }
}

const countdownTimer = setInterval(updateCountdown, 1000);

updateCountdown();
