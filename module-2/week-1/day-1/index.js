//destructuring
const obj = {
  petName: "Ragnar",
  age: 4,
  owner: "Joshua",
};
const pets = ["Ragnar", "Winnie", "Guga", "Tucson"];
//destructor the keys from the object
const { age, petName, owner } = obj;
const bannerString = `${petName} is ${age} years old and his owner is ${owner}`;

//destructoring an array
const [pet1, ...restOfPets] = pets;

console.log(pet1, restOfPets);
