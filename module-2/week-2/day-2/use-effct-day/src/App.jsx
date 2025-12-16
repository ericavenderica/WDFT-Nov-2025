import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct";
import Characters from "./pages/Characters";
import CharacterDetail from "./pages/CharacterDetail";
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<Characters />} />
          <Route
            path="/characters/:characterId"
            element={<CharacterDetail />}
          />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/update/:productId" element={<UpdateProduct />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
