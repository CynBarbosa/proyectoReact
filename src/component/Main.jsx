import React from "react";
import "../styles/main.css";

function Main({ name }) {
  return (
    <>
      <div className="containerMain">
        <h2 className="textoMain">Bienvenido/a: {name}</h2>
      </div>
    </>
  );
}

export default Main;
