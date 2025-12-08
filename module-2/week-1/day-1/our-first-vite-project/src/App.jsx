import "./App.css";
import celiaImg from "./assets/celia.jpg";
import kaiImg from "./assets/kai.jpeg";
import gugaImg from "./assets/guga.jpg";
function App() {
  const pet1 = "Celia";
  const pet2 = "Guga";
  const pet3 = "Kai";

  return (
    <>
      <h1>Page for our Pets</h1>
      <div className="pets-container">
        <div className="pet-card">
          <img src={celiaImg} alt="Celia picture" />
          <h2>{pet1}</h2>
        </div>
        <div className="pet-card">
          <img src={gugaImg} alt="Guga picture" />
          <h2>{pet2}</h2>
        </div>
        <div className="pet-card">
          <img src={kaiImg} alt="Kai picture" />
          <h2>{pet3}</h2>
        </div>
      </div>
    </>
  );
}

export default App;
