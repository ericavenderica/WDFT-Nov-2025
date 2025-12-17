import { NavLink } from "react-router-dom";
import logo from "../assets/ironhack-logo.png";
const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <h3>C.R.U.D.</h3>

      <NavLink to={"/"}>All Recipes</NavLink>

      <NavLink to="add-recipe">Add a Recipe</NavLink>
    </nav>
  );
};
export default Navbar;
