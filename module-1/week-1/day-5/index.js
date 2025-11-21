//***********objects ********/
const pet1 = {
  "pet name": "Winnie",
  image: "./WINNIE.JPG",
  age: 5,
  ownér: "Jose",
  toys: ["bone", "ball", "rope"],
  address: {
    number: 123,
    street: "Spain St",
    country: "Spain",
  },
  bark: function () {
    console.log(` ${pet1["pet name"]} says Woof woof!`);
  },
};
pet1.bark();
//log the name, owner and toys of the pet1 using the dot notation
// console.log(
//   `${pet1["pet name"]} is the beautiful dog of ${pet1.ownér} and she is ${pet1.age} years old with a bunch of toys ${pet1.toys}`
// );
// //using the bracket notation
// console.log(pet1["pet name"]);
//special use case for brackets
const theAgeVariable = "age";
// console.log(pet1[theAgeVariable]);
//access an object inside an object, log the full addess as a string
// console.log(
//   `The full address is... ${pet1.address.number} ${pet1.address.street}, ${pet1.address.country}`
// );
//add a toy for Winnie
pet1.toys.push("treats");
//removing a property on an object
delete pet1.image;
//check if a property exists in a object
// console.log("petage" in pet1);
// grab all the keys from an object and all of the values
const theKeys = Object.keys(pet1);
const theValues = Object.values(pet1);
// console.log("keys", theKeys);
// console.log("values", theValues);

//****************** */
//the only loop that loops over and object is the for in
for (let key in pet1) {
  //the key the keys in the object
  //but access the values you need the bracket notation
  const value = pet1[key];
  //   console.log(`the key is ${key} with the value of ${value}`);
}

//extra credit.... give pet1 the ability to bark
