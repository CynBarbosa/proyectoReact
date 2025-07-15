import { NavLink } from "react-router-dom";
import "../styles/item.css";

function Item({ product }) {
  return (
    <div className="containerItem" key={product.id}>
      <img className="itemImg" src={product.image} alt={product.title} />
      <h4 className="itemTitulo">{product.title}</h4>
      <p className="itemPrecio">Precio: ${product.price}</p>
      <NavLink to={`item/${product.id}`} className="containerItemBoton">
        <button className="itemBoton">Ver mas...</button>
      </NavLink>
    </div>
  );
}

export default Item;
