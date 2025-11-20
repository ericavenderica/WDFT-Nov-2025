// Iteration 1: Names and Input
const hacker1 = "Joshua";
// console.log("The drivers name is " + hacker1);
console.log(`The drivers name is ${hacker1}`);
const hacker2 = "Joshua";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    ` It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
// Iteration 3: Loops
let spacedName = "";
for (let i = 0; i < hacker1.length; i++) {
  //   console.log(hacker1[i].toUpperCase());
  if (i < hacker1.length - 1) {
    spacedName += hacker1[i].toUpperCase() + " ";
  } else {
    spacedName += hacker1[i].toUpperCase();
  }
}
console.log(spacedName);

//reversed name
let reversedName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}
console.log(reversedName);

//lexical
// let longestName = "";
// let alphaFirst = "";
// if (hacker1.length > hacker2.length) {
//   longestName = hacker1;
// } else if (hacker2.length > hacker1.length) {
//   longestName = hacker2;
// } else {
//   longestName = hacker1;
// }

// for (let i = 0; i < longestName.length; i++) {
//   if (hacker1[i] < hacker2[i]) {
//     alphaFirst = hacker1;
//     break;
//   } else if (hacker1[i] > hacker2[i]) {
//     alphaFirst = hacker2;
//     break;
//   }
// }
// if (hacker1 < hacker2) {
//   alphaFirst = hacker1;
// } else if (hacker1 > hacker2) {
//   alphaFirst = hacker2;
// }

const newLexicalName = hacker2.localeCompare(hacker1);

if (newLexicalName === -1) {
  console.log("The navigators name comes first");
} else if (newLexicalName === 1) {
  console.log("the drivers name goes first");
} else {
  console.log("they have the same names");
}
