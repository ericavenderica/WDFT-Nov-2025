// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);
//grab the delete button
const deleteBtn = exampleRow.querySelector(".btn-delete");
deleteBtn.addEventListener("click", () => {
  exampleRow.remove();
});
//grab the like button
const likeBtn = exampleRow.querySelector(".btn-like");
likeBtn.addEventListener("click", () => {
  likeBtn.classList.toggle("selected");
});
// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

threeContacts.forEach((oneContact) => {
  const exampleRow = document.createElement("tr");
  exampleRow.innerHTML = `
  <td>
    <img src="${oneContact.pictureUrl}" />
  </td>
  <td> ${oneContact.name} </td>
  <td> ${oneContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like ">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

  tableBody.appendChild(exampleRow);

  //grab the delete button
  const deleteBtn = exampleRow.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => {
    exampleRow.remove();
  });
  //grab the like button
  const likeBtn = exampleRow.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("selected");
  });
});

//event listener for the random button
buttonAddRandom.addEventListener("click", () => {
  console.log("random button clicked");

  //first we need a random index
  const randomIndex = Math.floor(Math.random() * contacts.length);
  //get the random contact at that index
  const theRandomPerson = contacts[randomIndex];
  //remove the random person so not to choose more than once
  contacts.splice(randomIndex, 1);

  const ourNewRow = document.createElement("tr");
  ourNewRow.innerHTML = `
  <td>
    <img src="${theRandomPerson.pictureUrl}" />
  </td>
  <td> ${theRandomPerson.name} </td>
  <td> ${theRandomPerson.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
  `;
  //this adds the row to the DOM visually
  tableBody.appendChild(ourNewRow);
  //grab the delete button
  const deleteBtn = ourNewRow.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => {
    ourNewRow.remove();
  });
  //grab the like button
  const likeBtn = ourNewRow.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("selected");
  });
});
