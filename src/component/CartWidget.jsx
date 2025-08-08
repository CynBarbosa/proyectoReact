import { useContext } from "react";
import { cartContext } from "../context/CartProvider";
import { NavLink } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

function CartWidget() {
  const resultado = useContext(cartContext);
  return (
    <NavLink
      to={"/cart"}
      className={`headerIcons ${1 > 0 ? "has-items" : ""}`}
      title="Carrito"
    >
      <ShoppingBag />
      {resultado.cantidadTotal}
    </NavLink>
  );
}

export default CartWidget;
