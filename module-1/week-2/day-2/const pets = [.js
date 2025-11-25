const pets = [
  { name: "Ragnar", age: 4, owner: "Joshua", email: "j@j.com" },
  { name: "Tucson", age: 1, owner: "Erica", email: "e@e.com" },
  { name: "Guga", age: 2, owner: "Pablo", email: "p@p.com" },
  { name: "Kai", age: 2, owner: "Victor", email: "v@v.com" },
  { name: "Winnie", age: 6, owner: "Jose", email: "j@j.com" },
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
console.log({ youngPets, oldPetsOneLiner, oneSpecificPet });
