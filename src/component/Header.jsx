import { NavLink } from "react-router-dom";
import { Disc3, Gitlab, Heart, ShoppingBag } from "lucide-react";
import NavBar from "./NavBar";
import "../styles/header.css";

function Header() {
  return (
    <header>
      <div className="containerHeader">
        <NavLink to={"/"} className="link link_title">
          <h1 className="logo">
            <Disc3 />
            BinnieHub!
          </h1>
        </NavLink>

        <input
          className="buscador"
          type="text"
          placeholder="Buscar producto..."
          id="search"
        />
        <div className="containerHeaderIcons">
          <NavLink to={"/login"} className="headerIcons" title="Login">
            <Gitlab />
          </NavLink>
          <NavLink
            to={"/favoritos"}
            className={`headerIcons ${1 > 0 ? "has-items" : ""}`}
            title="Favoritos"
          >
            <Heart />
          </NavLink>
          <NavLink
            to={"/cart"}
            className={`headerIcons ${1 > 0 ? "has-items" : ""}`}
            title="Carrito"
          >
            <ShoppingBag />
          </NavLink>
        </div>
      </div>
      <NavBar />
    </header>
  );
}

export default Header;
