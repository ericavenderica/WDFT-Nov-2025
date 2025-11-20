//************* if statements ********/
const myAge = 17;
// if (myAge >= 21) {
//   console.log("You can drink legally in the US");
// } else if (myAge >= 18) {
//   console.log("You can only drink in Europe");
// } else {
//   console.log("You cant even vote, so no drinking");
// }

//************Switch statement *****/
const charName = "Jon";

// switch (charName) {
//   case "Jon":
//     console.log("The True King");
//     break;
//   case "Tyrion":
//   case "Jaime":
//   case "Cersei":
//     console.log("You are a Lannister, and you always pay your debts");
//     break;
//   default:
//     console.log("sorry you are not important");
// }

//***************For loop ************/
//the for needs three things, where to start counting... where to stop.... and how much to increment by
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log("even", i);
//   } else {
//     console.log("odd", i);
//   }
//   //checking even and odd with switch statement
//   //   switch (true) {
//   //     case i % 2 === 0:
//   //       console.log("even", i);
//   //       break;
//   //     default:
//   //       console.log("odd", i);
//   //   }
//   //always on every iteration
//   //   console.log("odd", i);
// }

//a for loop that counts from 1 to 50 but only logs the multiples of 3
for (let i = 3; i <= 50; i += 3) {
  //   console.log(i);
}
//for loop in reverse counting from 200 down to 180
for (let i = 200; i >= 180; i--) {
  //   console.log(i);
}

//FIZZ BUZZ challenge
//write a loop that counts from 1-100 including 100
//if the number is divisible by 3 then log 'FIZZ'
//if the number is divisible by 5 then log 'BUZZ'
//if the number is divisible by 3 and 5 then log 'FIZZ BUZZ'
//else just log the number
// for (let i = 1; i <= 30; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FIZZ BUZZ");
//   } else if (i % 3 === 0 && i % 5 !== 0) {
//     console.log("FIZZ");
//   } else if (i % 5 === 0) {
//     console.log("BUZZ");
//   } else {
//     console.log(i);
//   }
// }

//***************while loop **********/
let number = 11;
// while (number <= 10) {
//   console.log("inside the while", number);
//   number++;
// }

// //************do while */
// do {
//   console.log("inside the do while", number);
//   number++;
// } while (number <= 10);
//*************functions */
//declaring a function with the function keyword
function addTwoNumbers(num1, num2) {
  const petName = "Guga";
  console.log("inside the add function", petName);
  return num1 + num2;
}
function sayHello() {
  console.error("Hello world");
}
//declaring a function with the fat arrow syntax
const subtractTwoNumbers = (a, b) => {
  return a - b;
};

//invocating the function
// const sum = addTwoNumbers(4, 5);
// console.log(sum);
// console.log(addTwoNumbers(50, 5));
// sayHello();
// const difference = subtractTwoNumbers(10, 3);
// console.log(difference);

//************arrays */
const numbersArray = ["Ragnar", "Guga", "Tucson"];
//.push() adds an element to the end
numbersArray.push(6);
//.unshift( ) adds an element the start
numbersArray.unshift("hello world");
//.pop() removes the last element
numbersArray.pop();
//.shift() remove the first element
numbersArray.shift();

//**********.splice()**********/
numbersArray.splice(5, 3, "this is inserted", "this is also inserted");
// console.log(numbersArray);

//************forEach *******/
numbersArray.forEach((oneElement, theIndex, wholeArray) => {
  console.log(oneElement, "at index:", theIndex);

  console.log(wholeArray);
});
