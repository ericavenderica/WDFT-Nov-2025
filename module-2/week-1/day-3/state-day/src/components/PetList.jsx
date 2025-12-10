import { PetCard } from "./PetCard";
const PetList = ({ petState, handleDeletePet }) => {
  return (
    <>
      <h2>Pets:</h2>
      {petState.map((onePet) => (
        <PetCard
          key={onePet.id}
          onePet={onePet}
          handleDeletePet={handleDeletePet}
        />
      ))}
    </>
  );
};

export default PetList;
