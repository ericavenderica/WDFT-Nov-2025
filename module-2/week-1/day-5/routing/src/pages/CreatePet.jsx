import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
export const CreatePet = ({ pets, setPetState }) => {
  const [name, setName] = useState("");
  const [petAge, setPetAge] = useState(0);
  const [petImage, setPetImage] = useState("");

  //this allows us to navigate to other pages in a function
  const nav = useNavigate();
  function handleNameChange(event) {
    // console.log("name was changed", event);
    setName(event.target.value);
  }

  function handleAddPet(event) {
    //this stops the form from reloading the page, do this first
    event.preventDefault();
    const newPet = { id: uuidv4(), name, age: Number(petAge), image: petImage };
    console.log("pet added", newPet);
    //this actually adds the new pet to the array
    setPetState([newPet, ...pets]);

    //this clears the form after submission
    setName("");
    setPetAge(0);
    setPetImage("");

    //this takes the user to the /pets page
    nav("/pets-list");
  }

  return (
    <>
      <h2>Add your Pet:</h2>
      <form onSubmit={handleAddPet}>
        <label>
          Pet Name:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="your pet name"
          />
        </label>
        <label>
          Pet Age:
          <input
            type="number"
            min={0}
            value={petAge}
            onChange={(event) => {
              setPetAge(event.target.value);
            }}
          />
        </label>
        <label>
          Pet Picture:
          <input
            type="text"
            value={petImage}
            onChange={(e) => setPetImage(e.target.value)}
          />
        </label>
        <button>Add</button>
      </form>
    </>
  );
};
