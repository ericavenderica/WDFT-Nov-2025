import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PetCard from "./components/PetCard";
function App() {
  const pets = [
    {
      name: "Ragnar",
      age: 4,
      owner: {
        name: "Joshua",
        address: {
          number: 123,
          street: "France Way",
          country: "France",
        },
      },
    },
    {
      name: "Winnie",
      age: 5,
      owner: {
        name: "Jose",
        address: {
          number: 123,
          street: "Barcy Way",
          country: "Spain",
        },
      },
    },
    {
      name: "Guga",
      age: 2,
      owner: {
        name: "Pablo",
        address: {
          number: 123,
          street: "Brazil Way",
          country: "Portugal",
        },
      },
    },
  ];

  return (
    <>
      {/* this is actually using the component from the other file */}
      <Navbar name="Ragnar" age={4} />
      <main>
        <h1>Props day</h1>
        <section id="pets-container">
          <PetCard onePet={pets[0]} />
          <PetCard onePet={pets[1]} />
          <PetCard onePet={pets[2]} />
        </section>
      </main>
      <Footer name="Caty" age={5} owner="Andres" />
    </>
  );
}

export default App;
