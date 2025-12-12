import { Link, NavLink } from "react-router-dom";
import logo from "../assets/ironhack-logo.png";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <h1>Routing Day </h1>
      <section>
        <NavLink to="/create-a-pet">Add a Pet</NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/pets-list">All Pets</NavLink>
      </section>
    </nav>
  );
};

export default Navbar;
