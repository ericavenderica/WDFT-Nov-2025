//global scope variable
const petName = "Tucson";
let sum = 0;
// console.log("globally scoped", petName);
if (2 + 2 === 4) {
  const petName = "Kai";
  //block scoped
  //   console.log("inside of an if statement", petName);
}
//functionally scoped
function add(num1, num2) {
  sum = num1 + num2;
  return sum;
}
add(2, 3);
// console.log("variable inside a fuction", sum);

const myDog = "Ragnar";
// console.log(myDog);

// subtract(10, 3);
function subtract(a, b) {
  console.log(a - b);
  return a - b;
}

const multiply = function (a, b) {
  return a * b;
};
// console.log(multiply(2, 5));

// ********************* copies **************
const str = "Hello world";
let str2 = str;
str2 = "goodbye";

const arr1 = [1, 2, 3, [4, 5, 6]];
const arr2 = arr1;

//spread operator is ...
const arr3 = [...arr1];

//Joshuas true deep copy
const arr4 = JSON.parse(JSON.stringify(arr1));
const arr5 = structuredClone(arr1);
arr5[3].push(7);
// console.log({ arr1, arr2, arr3, arr4, arr5 });

//DOM manipulation
const counterElement = document.getElementById("counter");
const startButtonElement = document.getElementById("start-button");
// const stopButtonElement = document.getElementById("stop-button");
const clearButtonElement = document.getElementById("clear-timer");
const toastContainerElement = document.getElementById("toast-container");
const closeToastElement = document.getElementById("close-toast");
let counter = 0;
let timerId = null;
//setTimeout

//setInterval
function startTimer() {
  timerId = setInterval(() => {
    counter++;
    counterElement.innerText = counter;
    console.log("inside the set interval, every second", counter);

    if (counter === 3) {
      toastContainerElement.style.display = "flex";
      setTimeout(() => {
        toastContainerElement.style.display = "none";
      }, 5000);
    }
    //Guias question
    // if (counter === 7) {
    //   //this changes the JS variable to zero
    //   counter = 0;
    //   //this updates the DOM to agree with that variable
    //   counterElement.innerText = counter;
    //   clearInterval(timerId);
    // }
  }, 1000);
}
function stopTimer() {
  clearInterval(timerId);
}

//add event listener to the button
startButtonElement.addEventListener("click", () => {
  if (startButtonElement.innerText === "Start") {
    startTimer();
    startButtonElement.innerText = "Stop";
    //here we add the class of stop
    startButtonElement.classList.add("stop");
  } else {
    stopTimer();
    startButtonElement.innerText = "Start";
    startButtonElement.classList.remove("stop");
  }
});
// stopButtonElement.addEventListener("click", () => {
//   stopTimer();
// });
clearButtonElement.addEventListener("click", () => {
  //this changes the JS variable to zero
  counter = 0;
  //this updates the DOM to agree with that variable
  counterElement.innerText = counter;
});

closeToastElement.addEventListener("click", () => {
  toastContainerElement.style.display = "none";
});
