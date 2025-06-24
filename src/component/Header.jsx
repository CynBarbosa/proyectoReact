import React from "react";
import "../styles/header.css";

function Header() {
  return (
    <>
      <div className="containerHeader">
        <h1 className="logo">Mi tienda</h1>
        <input
          className="buscador"
          type="text"
          placeholder="Buscar producto..."
          id="search"
        />
        <a className="icono" href="">
          Usuario
        </a>
        <a className="icono" href="">
          Carrito
        </a>
      </div>
    </>
  );
}

export default Header;
