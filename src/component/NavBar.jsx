import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

function NavBar() {
  return (
    <nav>
      <NavLink to={"/"} className="link">
        Home
      </NavLink>
      <NavLink to={"/category/men's clothing"} className="link">
        Ropa de Hombre
      </NavLink>
      <NavLink to={"/category/jewelery"} className="link">
        Joyeria
      </NavLink>
      <NavLink to={"/category/electronics"} className="link">
        electronicos
      </NavLink>
      <NavLink to={"/category/women's clothing"} className="link">
        Ropa de mujer
      </NavLink>
    </nav>
  );
}

export default NavBar;
