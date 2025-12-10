import { useState } from "react";
import "./App.css";
import ragnarImg from "./assets/ragnar.png";
import winnieImg from "./assets/WINNIE.JPG";
import gugaImg from "./assets/guga.jpg";
import celiaImg from "./assets/celia.JPG";
import petsData from "./data.json";
import { pets as pets2 } from "./data2";
import PetList from "./components/PetList";
function App() {
  const pets = [
    {
      id: 1,
      name: "Ragnar",
      age: 4,
      image: ragnarImg,
      owner: {
        name: "Joshua",
        address: {
          number: 123,
          street: "France Way",
          country: "France",
        },
      },
      type: "Cat",
      wonAward: true,
    },
    {
      id: 2,
      name: "Winnie",
      age: 5,
      image: winnieImg,
      owner: {
        name: "Jose",
        address: {
          number: 123,
          street: "Barcy Way",
          country: "Spain",
        },
      },
      type: "Dog",
      wonAward: false,
    },
    {
      id: 3,
      name: "Guga",
      age: 2,
      image: gugaImg,
      owner: {
        name: "Pablo",
        address: {
          number: 123,
          street: "Brazil Way",
          country: "Portugal",
        },
      },
      type: "Dog",
      wonAward: true,
    },
    {
      id: 4,
      name: "Celia",
      age: 11,
      image: celiaImg,
      owner: {
        name: "Kostas",
        address: {
          number: 123,
          street: "France Way",
          country: "France",
        },
      },
      type: "Dog",
      wonAward: false,
    },
  ];

  //creating a variable with useState
  const [count, setCount] = useState(0);
  const [petState, setPetState] = useState(pets);
  //functions
  function handleAddToCount() {
    console.log("count added");
    setCount(count + 1);
  }
  function handleDeletePet(petId) {
    const filteredPets = petState.filter((pet) => pet.id !== petId);
    console.log("pet deleted", petId, filteredPets);
    setPetState(filteredPets);
  }
  return (
    <>
      <h1>useState Day</h1>
      <h3>Count: {count}</h3>
      <button onClick={handleAddToCount}>Add to Count</button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Subtract from count
      </button>
      <PetList petState={petState} handleDeletePet={handleDeletePet} />
    </>
  );
}

export default App;
