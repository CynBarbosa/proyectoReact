import { useContext } from "react";
import { cartContext } from "../context/CartProvider";
import { NavLink } from "react-router-dom";
import { Trash2 } from "lucide-react";
import "../styles/cart.css";

function Cart() {
  const { cart, removeItem, clear } = useContext(cartContext);

  const calcularTotal = () => {
    let total = 0;
    cart.forEach((elemento) => {
      total += elemento.item.price * elemento.quantity;
    });
    return total;
  };

  const renderCarritoVacio = () => {
    return (
      <div className="containerCart">
        <div>
          <h5>No hay elementos en el carrito</h5>
        </div>
        <div>
          <NavLink to="/">
            <button> Home </button>
          </NavLink>
        </div>
      </div>
    );
  };

  const renderCarrito = () => {
    console.log(cart);
    return (
      <div>
        {cart.map((elemento) => (
          <div className="containerCart" key={elemento.item.id}>
            <img
              className="cartImg"
              src={elemento.item.image}
              alt={elemento.item.title}
            />
            <h4 className="cartTitulo">{elemento.item.title}</h4>
            <p>
              {Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
              }).format(elemento.item.price)}
            </p>
            <strong>Cantidad: {elemento.quantity}</strong>
            <button
              className="botonCart"
              type="button"
              onClick={() => removeItem(elemento.item.id)}
            >
              <Trash2 />
            </button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>{cart.length === 0 ? renderCarritoVacio() : renderCarrito()}</div>
  );
}

export default Cart;
