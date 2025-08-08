import { NavLink } from "react-router-dom";
import "../styles/item.css";

function Item({ item }) {
  return (
    <div className="containerItem" key={item.id}>
      <img className="itemImg" src={item.image} alt={item.title} />
      <h4 className="itemTitulo">{item.title}</h4>
      <p>
        {Intl.NumberFormat("es-AR", {
          style: "currency",
          currency: "ARS",
        }).format(item.price)}
      </p>
      <NavLink to={`item/${item.id}`} className="containerItemBoton">
        <button className="itemBoton">Ver mas...</button>
      </NavLink>
    </div>
  );
}

export default Item;
