import { useParams, useSearchParams } from "react-router-dom";

export const PetDetailPage = ({ petState }) => {
  //this is for the queries
  const [theQueries] = useSearchParams();
  const bestDogEver = theQueries.get("bestPetEver");
  const onlyAcceptablePizza = theQueries.get("pizza");
  console.log("the qs", bestDogEver, onlyAcceptablePizza);

  //this is for the parameters
  const { petId } = useParams();

  const theOnePet = petState.find((onePet) => {
    if (onePet.id == petId) {
      return true;
    }
  });

  //   console.log(petId, theOnePet);
  return (
    <div>
      <h2>{theOnePet.name}'s Page</h2>
      <img
        alt={theOnePet.name}
        src={theOnePet.image}
        style={{ width: "90%" }}
      />
    </div>
  );
};
