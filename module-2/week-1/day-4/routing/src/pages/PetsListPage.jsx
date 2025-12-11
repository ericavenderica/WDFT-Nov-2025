import { Link } from "react-router-dom";

function PetsListPage({ petState }) {
  return (
    <div style={{ marginLeft: "30px" }}>
      <h2>Pets:</h2>
      {petState.map((onePet) => {
        return (
          <Link
            to={`/pet-detail/${onePet.id}?bestPetEver=Ragnar&pizza=Pineapple`}
            key={onePet.id}
          >
            <div className="pet-card">
              <img src={onePet.image} alt="pet image" />
              <p>{onePet.name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default PetsListPage;
