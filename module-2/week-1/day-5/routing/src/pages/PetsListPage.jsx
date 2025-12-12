import { Link } from "react-router-dom";

function PetsListPage({ pets, handleDeletePet }) {
  return (
    <div style={{ marginLeft: "30px" }}>
      {pets.length === 0 ? (
        <p>No pets</p>
      ) : (
        <>
          <h2>Pets:</h2>
          {pets.map((onePet) => {
            return (
              <div className="pet-card" key={onePet.id}>
                <Link
                  to={`/pet-detail/${onePet.id}?bestPetEver=Ragnar&pizza=Pineapple`}
                >
                  <img src={onePet.image} alt="pet image" />
                </Link>
                <p>{onePet.name}</p>
                <button onClick={() => handleDeletePet(onePet.id)}>
                  Delete
                </button>
                <Link to={`/edit-pet/${onePet.id}`}>
                  <button>Edit</button>
                </Link>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default PetsListPage;
