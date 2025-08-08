import "../styles/itemDetail.css";
import ItemCount from "./ItemCount";
import { cartContext } from "../context/CartProvider";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

function ItemDetail({ product }) {
  const [count, setCount] = useState(0);
  const { addItem } = useContext(cartContext);

  const addHandler = (contador) => {
    addItem(product, contador);
    setCount(contador);
  };
  return (
    <div className="containerDetail">
      <div className="containerImgDetail">
        <img className="imgDetail" src={product.image} alt={product.title} />
      </div>
      <div className="containerTextDetail">
        <h3 className="tituloDetail">{product.title}</h3>
        <p>{product.description}</p>
        <p>
          {Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
          }).format(product.price)}
        </p>
        {count === 0 ? (
          <ItemCount
            stock={product.stock}
            // initial={product.initial}
            onAdd={addHandler}
          ></ItemCount>
        ) : (
          <>
            <h5 className="">Cantidad agregada: {count}</h5>
            <NavLink to="/cart">
              <button className="botonAddCount">Ir al carrito</button>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
