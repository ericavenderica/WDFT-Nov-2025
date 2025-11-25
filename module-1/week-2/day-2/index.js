const pets = [
  { name: "Kai", age: 2, owner: "Victor", email: "v@v.com" },
  { name: "Tucson", age: 1, owner: "Erica", email: "e@e.com" },
  { name: "Guga", age: 2, owner: "Pablo", email: "p@p.com" },
  { name: "Winnie", age: 6, owner: "Jose", email: "j@j.com" },
  { name: "Ragnar", age: 6, owner: "Joshua", email: "j@j.com" },
];
const numsArray = [2, 4, 7, 22];
//*****************.map() ************/
// with the .map, what you do one element gets done to all elements
const doubledArray = numsArray.map((currentNumber, index, wholeArray) => {
  const doubledNumber = currentNumber * 2;
  return doubledNumber;
});
//oneliner version of the above
const tripledArray = numsArray.map((num) => num * 3);

// console.log({ doubledArray, tripledArray });
// pull all the names out of the pets array
const petNames = pets.map((onePet) => {
  return onePet.name;
});
const petOwners = pets.map((pet) => pet.owner);

//map over the pets array and return the name of each pet with its corrosponding email
const petDetails = pets.map((pet) => {
  return { name: pet.name, email: pet.email };
});
//oneliner
// const petDetails = pets.map((pet) => ({ name: pet.name, email: pet.email }));

//********************.filter()********/
//all pets that are 2 years old or less
const youngPets = pets
  .filter((currentPet, index, wholeArray) => {
    if (currentPet.age <= 2) {
      return true;
    }
  })
  .map((pet) => pet.name);

//oneliner
const oldPetsOneLiner = pets.filter((pet) => pet.age >= 6);

//method to find one specific element
// .find()
const oneSpecificPet = pets.find((currentPet) => {
  if (currentPet.owner === "Joshua") {
    return true;
  }
});
// console.log({ youngPets, oldPetsOneLiner, oneSpecificPet });
const numbersArray = [222, -5, 2, 40, 1, 6];

//******************.reduce()**************/
const total = numbersArray.reduce((accumulator, currentNumber) => {
  //   console.log({ accumulator, currentNumber });
  return accumulator + currentNumber;
}, 0);
const averagePetAge =
  pets.reduce((acc, pet) => {
    if (typeof pet.age === "number") {
      return acc + pet.age;
    } else {
      return acc;
    }
  }, 0) / pets.length;
// console.log(averagePetAge);
// const names = ["Josh", "Ragnar", "Amaury"];
//***************sort() */
// numbersArray.sort((curr, next) => {
//   if (curr > next) {
//     return 100;
//   } else if (curr < next) {
//     return -22234;
//   } else {
//     return 0;
//   }
// });
//oneliner
// numbersArray.sort((a, b) => b - a);

//toSorted()
// const newSortedArray = numbersArray.toSorted((a, b) => a - b).reverse()

//sort pets by age ascending and if the age is the same... sort by the  name
const petsAsc = pets.toSorted((currentPet, nextPet) => {
  if (currentPet.age > nextPet.age) {
    return 1;
  } else if (currentPet.age < nextPet.age) {
    return -1;
  } else {
    if (currentPet.name > nextPet.name) {
      return 1;
    } else if (currentPet.name < nextPet.name) {
      return -1;
    } else {
      return 0;
    }
  }
});

// .reverse() that mutates the original
numbersArray.reverse();
// .toReversed() this one gives a new variable and doesnt change the original
const reversedNumbers = numbersArray.toReversed();
console.log(numbersArray, reversedNumbers);
