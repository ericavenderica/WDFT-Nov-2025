import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PetsListPage from "./pages/PetsListPage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ragnarImg from "./assets/ragnar.png";
import winnieImg from "./assets/WINNIE.JPG";
import gugaImg from "./assets/guga.jpg";
import celiaImg from "./assets/celia.JPG";
import { useState } from "react";
import { PetDetailPage } from "./pages/PetDetailPage";
function App() {
  const pets = [
    {
      id: 1,
      name: "Ragnar",
      age: 4,
      image: ragnarImg,
      owner: {
        name: "Joshua",
        address: {
          number: 123,
          street: "France Way",
          country: "France",
        },
      },
      type: "Cat",
      wonAward: true,
    },
    {
      id: 2,
      name: "Winnie",
      age: 5,
      image: winnieImg,
      owner: {
        name: "Jose",
        address: {
          number: 123,
          street: "Barcy Way",
          country: "Spain",
        },
      },
      type: "Dog",
      wonAward: false,
    },
    {
      id: 3,
      name: "Guga",
      age: 2,
      image: gugaImg,
      owner: {
        name: "Pablo",
        address: {
          number: 123,
          street: "Brazil Way",
          country: "Portugal",
        },
      },
      type: "Dog",
      wonAward: true,
    },
    {
      id: 4,
      name: "Celia",
      age: 11,
      image: celiaImg,
      owner: {
        name: "Kostas",
        address: {
          number: 123,
          street: "France Way",
          country: "France",
        },
      },
      type: "Dog",
      wonAward: false,
    },
  ];
  const [petState, setPetState] = useState(pets);
  return (
    <>
      <Navbar />
      <main>
        <h1>Routing</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/pets-list"
            element={<PetsListPage petState={petState} />}
          />
          <Route
            path="/pet-detail/:petId"
            element={<PetDetailPage petState={petState} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
