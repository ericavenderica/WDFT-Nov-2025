function PetCard(props) {
  console.log("inside the pet card", props);
  const { name, age, owner } = props.onePet;
  return (
    <div className="pet-card">
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>Owner: {owner.name}</h2>
    </div>
  );
}

export default PetCard;
