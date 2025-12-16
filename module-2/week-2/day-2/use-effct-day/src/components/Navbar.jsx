import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <img alt="something" />
      <h2>Cool Day</h2>
      <section>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">All Products</NavLink>
        <NavLink to="add-product">Add a Product</NavLink>
        <NavLink to="/characters">Rick and Morty</NavLink>
      </section>
    </nav>
  );
};
