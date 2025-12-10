export const PetCard = ({ onePet, handleDeletePet }) => {
  return (
    <div className="pet-card">
      <p>{onePet.wonAward && "🏆"}</p>
      <img alt={onePet.name} src={onePet.image} />
      <p>Name: {onePet.name}</p>
      <p>Age: {onePet.age}</p>
      <p>Type: {onePet.type === "Cat" ? "😾" : "🐶"}</p>
      <button
        onClick={() => {
          handleDeletePet(onePet.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};
