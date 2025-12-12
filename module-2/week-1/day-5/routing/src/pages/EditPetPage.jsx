import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const EditPetPage = ({ petState, setPetState }) => {
  //grab the id from the url
  const { petId } = useParams();
  const thePetToEdit = petState.find((onePet) => {
    if (onePet.id == petId) {
      return true;
    }
  });
  //   console.log("the pet to edit:", thePetToEdit);
  const [name, setName] = useState(thePetToEdit.name);
  const [petAge, setPetAge] = useState(thePetToEdit.age);
  const [petImage, setPetImage] = useState(thePetToEdit.image);
  const nav = useNavigate();
  function handleUpdatePet(event) {
    event.preventDefault();
    const updatedPet = { name, age: petAge, image: petImage, id: petId };
    const updatedPetArray = petState.map((pet) => {
      if (pet.id == petId) {
        return updatedPet;
      } else {
        return pet;
      }
    });
    setPetState(updatedPetArray);
    nav("/pets-list");
  }
  return (
    <>
      <h2>Edit Pet:</h2>
      <form onSubmit={handleUpdatePet}>
        <label>
          Pet Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        <button>Update</button>
      </form>
    </>
  );
};
