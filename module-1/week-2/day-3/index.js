//grab an element from Html file
const myH1Element = document.querySelector("h1");
const myH3Element = document.querySelector(".header-2");
const petArticleElement = document.querySelector("#pets-container article");
const darkModeButton = document.getElementById("change-btn");
const addPetButton = document.getElementById("add-pet-button");
const bodyElement = document.querySelector("body");
const petsContainterElement = document.querySelector("#pets-container");
//our beautiful pets
const pets = [
  {
    name: "Kai",
    age: 2,
    owner: "Victor",
    email: "v@v.com",
    image: "./images/kai.jpeg",
  },
  {
    name: "Tucson",
    age: 1,
    owner: "Erica",
    email: "e@e.com",
    image: "./images/Tucson.jpg",
  },
  {
    name: "Guga",
    age: 2,
    owner: "Pablo",
    email: "p@p.com",
    image: "./images/Guga.jpg",
  },
  {
    name: "Winnie",
    age: 6,
    owner: "Jose",
    email: "j@j.com",
    image: "./images/WINNIE.JPG",
  },
  {
    name: "Ragnar",
    age: 6,
    owner: "Joshua",
    email: "j@j.com",
    image: "./images/ragnar.png",
  },
  {
    name: "Celia",
    age: 11,
    owner: "Kostas",
    email: "j@j.com",
    image: "./images/Celia.JPG",
  },
];

//change the background color of just the H1
myH1Element.style.backgroundColor = "blue";
//change the text of the h2 element
// myH3Element.innerText = "hello world";

//add a class to an element
// petArticleElement.classList.add("pet-card");
//remove a class to an element
// petArticleElement.classList.remove("pet-card");

//adding an event listener to a button
darkModeButton.addEventListener("click", () => {
  console.log("button clicked", darkModeButton.innerText);
  //target the body and add a class and remove a class when we click the button
  bodyElement.classList.toggle("dark-mode");

  //we need to check the text of the button and change it accordingly
  if (darkModeButton.innerText === "Dark Mode") {
    darkModeButton.innerText = "Light Mode";
  } else if (darkModeButton.innerText === "Light Mode") {
    darkModeButton.innerText = "Dark Mode";
  }
});
addPetButton.addEventListener("click", () => {
  //create a random index
  const randomIndex = Math.floor(Math.random() * pets.length);
  const randomPet = pets[randomIndex];

  //this removes the random pet from the original array so no duplicates
  pets.splice(randomIndex, 1);
  //creating an element with JS
  const ourArticle = document.createElement("article");
  //add the class to the new article
  ourArticle.classList.add("pet-card");
  ourArticle.innerHTML = `<img alt=${randomPet.name} src=${randomPet.image} />
        <h4>Name: ${randomPet.name}</h4>
        <h4>Age: ${randomPet.age}</h4>
        <button class='btn-delete'>Delete</button>
        `;
  // console.log({ randomIndex, randomPet, ourArticle });

  //this adds the article to the DOM
  petsContainterElement.appendChild(ourArticle);

  //target the delete button on the new <article>
  const delteBtn = ourArticle.querySelector(".btn-delete");
  delteBtn.addEventListener("click", () => {
    console.log("delete clicked");
    //remove the article from the DOM (page)
    //.remove actually removes the code from the Elements tab in the Browser
    // ourArticle.remove();
    //if you dont want to remove the code then use the display: 'none' property
    ourArticle.style.display = "none";
    //this will add the pet back to the array to choose again
    pets.push(randomPet);
  });
});
