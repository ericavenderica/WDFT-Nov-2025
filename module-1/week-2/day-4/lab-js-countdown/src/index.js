const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const startButtonElement = document.getElementById("start-btn");
const timeElement = document.getElementById("time");
const toastElement = document.getElementById("toast");
const closeToastElement = document.getElementById("close-toast");
const toastMessageElement = document.getElementById("toast-message");
// ITERATION 1: Add event listener to the start button

// Your code goes here ...
startButtonElement.addEventListener("click", () => {
  startCountdown();
  //disable button
  startButtonElement.disabled = true;
});
closeToastElement.addEventListener("click", () => {
  toastElement.classList.remove("show");
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  remainingTime = DURATION;
  timeElement.innerText = remainingTime;
  timer = setInterval(() => {
    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    }
    remainingTime--;
    timeElement.innerText = remainingTime;
    if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
      startButtonElement.disabled = false;
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toastElement.classList.add("show");
  toastMessageElement.innerText = message;
  setTimeout(() => {
    toastElement.classList.remove("show");
  }, 3000);
}
