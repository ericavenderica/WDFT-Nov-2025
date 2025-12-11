import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
const TravelList = () => {
  const [trips, setTrips] = useState(travelPlansData);

  function handleDeleteTrip(tripId) {
    const filteredTrips = trips.filter((x) => x.id !== tripId);
    setTrips(filteredTrips);
  }

  return (
    <div>
      {trips.map((oneTrip) => {
        return (
          <div className="trip-card" key={oneTrip.id}>
            <img alt={oneTrip.destination} src={oneTrip.image} />
            <section>
              <p>
                {oneTrip.destination} ({oneTrip.days} Days)
              </p>
              <p>{oneTrip.description}</p>
              <p>Price: ${oneTrip.totalCost}</p>
              {oneTrip.totalCost <= 350 ? (
                <p className="deal">Great Deal</p>
              ) : null}
              <section className="buttons-container">
                {oneTrip.totalCost >= 1500 ? (
                  <p className="premium">Premium</p>
                ) : null}
                {oneTrip.allInclusive && (
                  <p className="premium">All Inclusive</p>
                )}
                <button
                  onClick={() => {
                    handleDeleteTrip(oneTrip.id);
                  }}
                >
                  Delete
                </button>
              </section>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default TravelList;
