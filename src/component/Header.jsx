import "../styles/header.css";
import CartWidget from "./CartWidget";
import NavBar from "./NavBar";

function Header() {
  return (
    <header>
      <div className="containerHeader">
        <h1 className="logo">Mi tienda</h1>
        <input
          className="buscador"
          type="text"
          placeholder="Buscar producto..."
          id="search"
        />
        <CartWidget />
      </div>
      <NavBar />
    </header>
  );
}

export default Header;
